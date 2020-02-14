import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Divider } from './Divider';

storiesOf('common|Divider', module)
  .addDecorator(
    hostDecorator({
      paddingTop: 20,
      width: 600
    })
  )
  .add('base', () => <Divider />);
