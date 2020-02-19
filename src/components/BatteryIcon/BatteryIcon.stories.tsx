import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { BatteryIcon } from './BatteryIcon';

storiesOf('Components|BatteryIcon', module)
  .addDecorator(
    hostDecorator({
      height: 100,
      backgroundColor: 'silver',
      display: 'flex',
      alignItems: 'center'
    })
  )
  .add('Charged 100%', () => <BatteryIcon level={100} />)
  .add('Charged 20%', () => <BatteryIcon level={20} />)
  .add('Charged 10%', () => <BatteryIcon level={10} />)
  .add('Charged 0%', () => <BatteryIcon level={0} />)
  .add('Charging 100%', () => <BatteryIcon level={100} charging />)
  .add('Charging 20%', () => <BatteryIcon level={20} charging />)
  .add('Charging 10%', () => <BatteryIcon level={10} charging />)
  .add('Charging 0%', () => <BatteryIcon level={0} charging />)
  .add('Dark charging 20%', () => <BatteryIcon level={20} charging variant="dark" />)
  .add('Dark charging 10%', () => <BatteryIcon level={10} charging variant="dark" />)
  .add('Dark charging 0%', () => <BatteryIcon level={0} charging variant="dark" />)
  .add('Dark 100%', () => <BatteryIcon level={100} variant="dark" />)
  .add('Dark 20%', () => <BatteryIcon level={20} variant="dark" />)
  .add('Dark 10%', () => <BatteryIcon level={10} variant="dark" />)
  .add('Conter 100%', () => <BatteryIcon level={100} counter />)
  .add('Counter 34%', () => <BatteryIcon level={33.99999999} counter />)
  .add('Counter 20%', () => <BatteryIcon level={20} counter />)
  .add('Counter 0%', () => <BatteryIcon level={0} counter />);
