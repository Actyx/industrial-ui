import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { DatePicker } from './DatePicker';

const baseProps = {
  onChange: action('onChange')
};

storiesOf('Components|DatePicker', module)
  .addDecorator(hostDecorator())
  .add('No value', () => <DatePicker {...baseProps} />)
  .add('Value', () => <DatePicker {...baseProps} value={new Date('2019-12-26T17:45:00Z')} />);
