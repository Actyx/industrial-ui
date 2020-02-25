import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { LoremIpsumVeryShort, range } from '../../utils';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { VirtualizedList } from './VirtualizedList';
import { theme } from '../../theme';

type Item = Readonly<{
  id: string;
  description: string;
  value: string;
}>;

const data: ReadonlyArray<Item> = [
  { id: 'a', description: `A ${LoremIpsumVeryShort}`, value: '1' },
  { id: 'b', description: `B ${LoremIpsumVeryShort}`, value: '2' },
  { id: 'c', description: `C ${LoremIpsumVeryShort}`, value: '3' }
];

const FONT_WEIGHT_BOLD = theme.typography.fontWeightBold;

const baseProps = {
  data,
  getUniqKey: (datum: Item) => datum.id,
  header: (
    <>
      <div style={{ width: 100, fontWeight: FONT_WEIGHT_BOLD }}>Id</div>
      <div style={{ width: 300, fontWeight: FONT_WEIGHT_BOLD }}>Description</div>
      <div style={{ width: 100, marginLeft: 'auto', fontWeight: FONT_WEIGHT_BOLD }}>Value</div>
    </>
  ),
  // eslint-disable-next-line react/display-name
  renderRow: ({ id, description, value }: Item) => (
    <>
      <div style={{ width: 100 }}>{id}</div>
      <div style={{ width: 300 }}>{description}</div>
      <div style={{ width: 100, marginLeft: 'auto' }}>{value}</div>
    </>
  )
};

storiesOf('Components/VirtualizedList', module)
  .addDecorator(hostDecorator({ height: 400 }))
  .add('Base', () => <VirtualizedList<Item> {...baseProps} />)
  .add('Lots of data virtualized', () => {
    const d: ReadonlyArray<Item> = range(0, 10000).map(x => ({
      id: `${x}`,
      description: `desc ${x}`,
      value: `${x}`
    }));

    return <VirtualizedList<Item> {...baseProps} data={d} />;
  })
  .add('setRowClassName', () => (
    <VirtualizedList<Item>
      {...baseProps}
      setRowClassName={x => (x.id === 'b' ? 'font-weight-bold' : '')}
    />
  ))
  .add('isRowSelected', () => (
    <VirtualizedList<Item> {...baseProps} isRowSelected={x => x.id === 'b'} />
  ))
  .add('onRowSelect', () => (
    <VirtualizedList<Item> {...baseProps} onRowSelect={action('onRowSelected')} />
  ));
