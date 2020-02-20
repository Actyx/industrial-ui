import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { PaginationDots } from './PaginationDots';

storiesOf('Components|PaginationDots', module)
  .addDecorator(hostDecorator({}))
  .add('Base', () => <PaginationDots dots={2} index={0} onChangeIndex={action('onChangeIndex')} />);
