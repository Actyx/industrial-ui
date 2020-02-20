import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator, LoremIpsum } from '../../utils';
import * as React from 'react';
import { Tabs } from './Tabs';

storiesOf('Components|Tabs', module)
  .addDecorator(hostDecorator({}))
  .add('Base', () => (
    <Tabs
      tabs={[<strong key="xxx">Description</strong>, 'Documents']}
      selected={0}
      onSelect={action('onSelect')}
    >
      {LoremIpsum}
    </Tabs>
  ));
