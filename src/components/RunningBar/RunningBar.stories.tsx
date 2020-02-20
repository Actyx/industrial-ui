import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { RunningBar } from './RunningBar';

storiesOf('Components|RunningBar', module)
  .addDecorator(hostDecorator({}))
  .add('Base', () => <RunningBar />)
  .add('Fixed width', () => (
    <div style={{ width: 100 }}>
      <RunningBar />
    </div>
  ));
