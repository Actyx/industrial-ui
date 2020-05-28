import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Test } from './Test';

storiesOf('00_Test', module)
  .addParameters({ component: Test })
  .add('Test', () => <Test name="Hello world!" />);
