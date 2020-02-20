import { storiesOf } from '@storybook/react';
import { hostDecorator, LoremIpsumShort } from '../../utils';
import * as React from 'react';
import { SignalNotification } from './SignalNotification';

const text = 'Activity automatically interrupted';

const mkProps = (text: string, icon = 'warning') => ({
  icon,
  text
});

storiesOf('Components|SignalNotification', module)
  .addDecorator(
    hostDecorator({
      width: 500
    })
  )
  .add('Text', () => <SignalNotification {...mkProps(text)} />)
  .add('Long text', () => <SignalNotification {...mkProps(LoremIpsumShort)} />);
