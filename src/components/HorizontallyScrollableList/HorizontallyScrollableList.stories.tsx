import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator, range } from '../../utils';
import * as React from 'react';
import { HorizontallyScrollableList } from './HorizontallyScrollableList';

storiesOf('Components|HorizontallyScrollableList', module)
  .addDecorator(
    hostDecorator({
      width: 500,
      height: 240
    })
  )
  .add('base', () => (
    <HorizontallyScrollableList
      rows={3}
      onItemSelect={action('onItemSelect')}
      items={range(1, 8).map(x => ({ id: `${x}`, name: `Item ${x}` }))}
    />
  ))
  .add('long text', () => (
    <HorizontallyScrollableList
      rows={2}
      onItemSelect={action('onItemSelect')}
      items={range(1, 4).map(x => ({
        id: `${x}`,
        name: ` ${x} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
      }))}
    />
  ));
