import { storiesOf } from '@storybook/react';
import { hostDecorator, LoremIpsum } from '../../utils';
import * as React from 'react';
import { SignalNotification } from './SignalNotification';

const text1 = 'Activity automatically interrupted:';
const text2 = 'Activity automatically interrupted';

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
  .add('longText', () => <SignalNotification {...mkProps(text1)} />)
  .add('shortText', () => <SignalNotification {...mkProps(text2)} />)
  .add('veryLongText', () => <SignalNotification {...mkProps(LoremIpsum)} />);
