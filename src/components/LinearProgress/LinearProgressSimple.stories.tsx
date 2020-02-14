import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { LinearProgressSimple } from './LinearProgressSimple';

storiesOf('common|LinearProgressSimple', module)
  .addDecorator(hostDecorator({}))
  .add('green', () => <LinearProgressSimple color="green" value={50} />)
  .add('grey', () => <LinearProgressSimple color="grey" value={50} />)
  .add('orange', () => <LinearProgressSimple color="orange" value={50} />)
  .add('red', () => <LinearProgressSimple color="red" value={50} />)
  .add('white', () => <LinearProgressSimple color="white" value={50} border />)
  .add('yellow', () => <LinearProgressSimple color="yellow" value={50} />)
  .add('brown', () => <LinearProgressSimple color="brown" value={50} />)
  .add('disabled', () => <LinearProgressSimple color="green" value={50} disabled />);
