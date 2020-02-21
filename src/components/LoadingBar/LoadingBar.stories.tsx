import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { LoadingBar } from './LoadingBar';

storiesOf('Components|LoadingBar', module)
  .addDecorator(hostDecorator({}))
  .add('Base', () => <LoadingBar />)
  .add('Fixed width', () => (
    <div style={{ width: 100 }}>
      <LoadingBar />
    </div>
  ));
