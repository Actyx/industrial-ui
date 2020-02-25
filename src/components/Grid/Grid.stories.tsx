import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator, LoremIpsumVeryShort } from '../../utils';
import * as React from 'react';
import { Grid } from './Grid';

type Item = Readonly<{
  id: string;
  description: string;
  value: string;
}>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: ReadonlyArray<any> = [
  { id: 'a', description: `A ${LoremIpsumVeryShort}`, value: '1' },
  { id: 'b', description: `B ${LoremIpsumVeryShort}`, value: '2' },
  { id: 'c', description: `C ${LoremIpsumVeryShort}`, value: '3' }
];

const baseProps = {
  data,
  getUniqKey: (datum: Item) => datum.id,
  header: Object.keys(data[0]).map((x, idx) => (
    <td className="font-weight-bold" key={idx}>
      {x.toUpperCase()}
    </td>
  )),
  // eslint-disable-next-line react/display-name
  renderRow: ({ id, description, value }: Item) => (
    <>
      <td>{id}</td>
      <td>{description}</td>
      <td>{value}</td>
    </>
  )
};

storiesOf('Components/Grid', module)
  .addDecorator(hostDecorator({}))
  .add('Base', () => <Grid<Item> {...baseProps} />)
  .add('setRowClassName', () => (
    <Grid<Item> {...baseProps} setRowClassName={x => (x.id === 'b' ? 'font-weight-bold' : '')} />
  ))
  .add('isRowSelected', () => <Grid<Item> {...baseProps} isRowSelected={x => x.id === 'b'} />)
  .add('onRowSelect', () => <Grid<Item> {...baseProps} onRowSelect={action('onRowSelected')} />);
