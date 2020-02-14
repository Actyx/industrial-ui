import { storiesOf } from '@storybook/react';
import { hostDecorator, LoremIpsum } from '../../utils';
import * as React from 'react';
import { SignalNotification } from './SignalNotification';

const text1 = 'Activity automatically interrupted:';
const text2 = 'Activity automatically interrupted';

const mkProps = (text: string, icon = 'notification_important') => ({
  icon,
  text
});

storiesOf('common|SignalNotification', module)
  .addDecorator(
    hostDecorator({
      position: 'absolute',
      top: 100,
      left: 100,
      width: 800
    })
  )
  .add('longText', () => <SignalNotification {...mkProps(text1)} />)
  .add('shortText', () => <SignalNotification {...mkProps(text2)} />)
  .add('veryLongText', () => <SignalNotification {...mkProps(LoremIpsum)} />);
