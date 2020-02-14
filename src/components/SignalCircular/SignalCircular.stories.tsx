import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { SignalCircular } from './SignalCircular';

storiesOf('Components|SignalCircular', module)
  .addDecorator(hostDecorator())
  .add('xs', () => <SignalCircular color="green" size="xs" />)
  .add('sm', () => <SignalCircular color="green" size="sm" />)
  .add('md', () => <SignalCircular color="green" size="md" />)
  .add('red', () => <SignalCircular color="red" size="md" />)
  .add('orange', () => <SignalCircular color="orange" size="md" />)
  .add('yellow', () => <SignalCircular color="yellow" size="md" />)
  .add('green', () => <SignalCircular color="green" size="md" />)
  .add('lightGrey', () => <SignalCircular color="lightGrey" size="md" />)
  .add('darkGrey', () => <SignalCircular color="darkGrey" size="md" />);
