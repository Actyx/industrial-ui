import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Tabs } from './Tabs';

storiesOf('common|Tabs', module)
  .addDecorator(hostDecorator({}))
  .add('default', () => (
    <Tabs
      tabs={[<strong key="xxx">some name</strong>, 'Documents']}
      selected={0}
      onSelect={action('onSelect')}
    >
      <span>content to be figured out by somebody else</span>
    </Tabs>
  ));
