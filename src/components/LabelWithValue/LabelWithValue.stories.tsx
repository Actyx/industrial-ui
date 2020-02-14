import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { LabelWithValue } from './LabelWithValue';

storiesOf('common|LabelWithValue', module)
  .addDecorator(hostDecorator())
  .add('base', () => <LabelWithValue label="sample label" value="sample value" />);
