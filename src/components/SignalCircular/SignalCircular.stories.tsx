import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { SignalCircular } from './SignalCircular';

storiesOf('Components/SignalCircular', module)
  .addDecorator(hostDecorator())
  .add('Size xs', () => <SignalCircular color="green" size="xs" />)
  .add('Size sm', () => <SignalCircular color="green" size="sm" />)
  .add('Size md', () => <SignalCircular color="green" size="md" />)
  .add('Color red', () => <SignalCircular color="red" size="md" />)
  .add('Color orange', () => <SignalCircular color="orange" size="md" />)
  .add('Color yellow', () => <SignalCircular color="yellow" size="md" />)
  .add('Color green', () => <SignalCircular color="green" size="md" />)
  .add('Color lightGrey', () => <SignalCircular color="lightGrey" size="md" />)
  .add('Color darkGrey', () => <SignalCircular color="darkGrey" size="md" />);
