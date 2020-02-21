import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { MUIcon } from './MUIcon';
import { lightBlue } from '../../colors';

storiesOf('Components|MUIcon', module)
  .addDecorator(hostDecorator())
  .add('Base', () => <MUIcon type={'face'} />)
  .add('fontSize', () => <MUIcon type={'face'} fontSize={48} />)
  .add('color', () => <MUIcon type={'face'} color={lightBlue[500]} />);
