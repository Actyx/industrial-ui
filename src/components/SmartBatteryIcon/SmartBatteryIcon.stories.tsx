import { boolean, number, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { MockBatteryManager } from './common';
import { SmartBatteryIcon } from './SmartBatteryIcon';

storiesOf('common|SmartBatteryIcon', module)
  .addDecorator(withKnobs)
  .addDecorator(
    hostDecorator({
      height: 100,
      backgroundColor: 'silver',
      display: 'flex',
      alignItems: 'center'
    })
  )
  .add('default', () => {
    const chargingKnob = boolean('charging', false);
    const levelKnob = number('level', 100);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const getBatteryManager = (): any => {
      const battery = new MockBatteryManager();
      setTimeout(() => {
        battery.setCharging(chargingKnob);
        battery.setLevel(levelKnob / 100);
      }, 0);
      return Promise.resolve(battery);
    };

    return <SmartBatteryIcon getBatteryManager={getBatteryManager} counter />;
  });
