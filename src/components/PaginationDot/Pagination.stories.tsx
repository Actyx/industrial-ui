import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Pagination } from './Pagination';

storiesOf('Components|Pagination', module)
  .addDecorator(hostDecorator({}))
  .add('base', () => <Pagination dots={2} index={0} onChangeIndex={action('onChangeIndex')} />);
