import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { theme } from '../../theme';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { CardAction } from './CardAction';

storiesOf('Components|Card.CardAction', module)
  .addDecorator(
    hostDecorator({
      width: 500,
      height: 80,
      background: theme.palette.signal.redBright
    })
  )
  .add('base', () => <CardAction onClick={action('onClick')} buttonText={<span>Click me</span>} />);
