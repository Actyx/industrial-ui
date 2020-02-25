import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { LabelWithValue } from './LabelWithValue';

storiesOf('Components/LabelWithValue', module)
  .addDecorator(hostDecorator())
  .add('Base', () => <LabelWithValue label="sample label" value="sample value" />);
