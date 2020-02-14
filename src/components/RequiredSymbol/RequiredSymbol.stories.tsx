import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { RequiredSymbol } from './RequiredSymbol';

storiesOf('common|RequiredSymbol', module)
  .addDecorator(hostDecorator())
  .add('symbol', () => <RequiredSymbol />);
