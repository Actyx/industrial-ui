import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { PaginationDot } from './PaginationDot';

storiesOf('Components/PaginationDot', module)
  .addDecorator(hostDecorator({}))
  .add('Active', () => <PaginationDot active onClick={action('onClick')} />)
  .add('No active', () => <PaginationDot onClick={action('onClick')} />);
