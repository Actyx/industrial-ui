import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import { StatusCounter } from './StatusCounter';
import * as React from 'react';

storiesOf('common|Status.StatusCounter', module)
  .addDecorator(hostDecorator())
  .add('ready', () => <StatusCounter counter={1} status="ready" />)
  .add('requested', () => <StatusCounter counter={22} status="requested" />)
  .add('unknown', () => <StatusCounter counter={764} status="unknown" />)
  .add('long', () => <StatusCounter counter={43993487348734} status="ready" />);
