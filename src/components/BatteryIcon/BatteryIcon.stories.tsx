import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { BatteryIcon } from './BatteryIcon';

storiesOf('common|BatteryIcon', module)
  .addDecorator(
    hostDecorator({
      height: 100,
      backgroundColor: 'silver',
      display: 'flex',
      alignItems: 'center'
    })
  )
  .add('100', () => <BatteryIcon level={100} />)
  .add('20', () => <BatteryIcon level={20} />)
  .add('10', () => <BatteryIcon level={10} />)
  .add('0', () => <BatteryIcon level={0} />)
  .add('100 charge', () => <BatteryIcon level={100} charging />)
  .add('20 charge', () => <BatteryIcon level={20} charging />)
  .add('10 charge', () => <BatteryIcon level={10} charging />)
  .add('0 charge', () => <BatteryIcon level={0} charging />)
  .add('20 dark charge', () => <BatteryIcon level={20} charging variant="dark" />)
  .add('10 dark charge', () => <BatteryIcon level={10} charging variant="dark" />)
  .add('0 dark charge', () => <BatteryIcon level={0} charging variant="dark" />)
  .add('100 dark', () => <BatteryIcon level={100} variant="dark" />)
  .add('20 dark', () => <BatteryIcon level={20} variant="dark" />)
  .add('10 dark', () => <BatteryIcon level={10} variant="dark" />)
  .add('100 counter', () => <BatteryIcon level={100} counter />)
  .add('34 counter', () => <BatteryIcon level={33.99999999} counter />)
  .add('20 counter', () => <BatteryIcon level={20} counter />)
  .add('0 counter', () => <BatteryIcon level={0} counter />)
  .add('17.7777', () => <BatteryIcon level={17.7777} counter />);
