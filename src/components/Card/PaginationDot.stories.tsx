import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { PaginationDot } from './PaginationDot';

storiesOf('Components|Card.PaginationDot', module)
  .addDecorator(hostDecorator({}))
  .add('active', () => <PaginationDot active onClick={action('onClick')} />)
  .add('no active', () => <PaginationDot onClick={action('onClick')} />);
