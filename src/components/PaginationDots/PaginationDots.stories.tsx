import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { PaginationDots } from './PaginationDots';
import { grey } from '../../colors';

storiesOf('Components/PaginationDots', module)
  .addDecorator(
    hostDecorator({
      position: 'absolute',
      top: 0,
      left: 0,
      width: 200,
      height: 200,
      backgroundColor: grey[100]
    })
  )
  .add('Base', () => <PaginationDots dots={2} index={0} onChangeIndex={action('onChangeIndex')} />);
