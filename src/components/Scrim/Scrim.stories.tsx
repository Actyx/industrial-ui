import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Scrim } from './Scrim';

storiesOf('Components|Scrim', module)
  .addDecorator(
    hostDecorator({
      width: '100%',
      height: '100%'
    })
  )
  .add('Base', () => <Scrim open onClose={action('onClick')} />);
