import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { WhiteBoxWithShadow } from './WhiteBoxWithShadow';

storiesOf('common|WhiteBoxWithShadow', module)
  .addDecorator(hostDecorator({}))
  .add('base', () => (
    <div style={{ padding: 20, backgroundColor: 'grey' }}>
      <WhiteBoxWithShadow>whatever</WhiteBoxWithShadow>
    </div>
  ))
  .add('fixed width', () => (
    <div style={{ padding: 20, backgroundColor: 'grey', width: 200 }}>
      <WhiteBoxWithShadow>whatever</WhiteBoxWithShadow>
    </div>
  ));
