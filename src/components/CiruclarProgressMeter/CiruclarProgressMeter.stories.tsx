import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { CircularProgressMeter, MeterColor } from './CircularProgressMeter';

const baseProps = {
  color: MeterColor.Green
};

storiesOf('common|CircularProgressMeter', module)
  .addDecorator(hostDecorator({}))
  .add('25%', () => <CircularProgressMeter {...baseProps} value={25} />)
  .add('50%', () => <CircularProgressMeter {...baseProps} value={50} />)
  .add('75%', () => <CircularProgressMeter {...baseProps} value={75} />)
  .add('100%', () => <CircularProgressMeter {...baseProps} value={100} />)
  .add('150%', () => <CircularProgressMeter {...baseProps} value={150} />)
  .add('blue', () => <CircularProgressMeter value={60} color={MeterColor.Blue} />)
  .add('green', () => <CircularProgressMeter value={60} color={MeterColor.Green} />)
  .add('butt', () => <CircularProgressMeter value={60} color={MeterColor.Green} lineCap="butt" />)
  .add('round', () => <CircularProgressMeter value={60} color={MeterColor.Green} lineCap="round" />)
  .add('resize', () => (
    <div
      style={{
        width: 500,
        height: 500
      }}
    >
      <CircularProgressMeter
        value={60}
        color={MeterColor.Green}
        lineCap="round"
        width="100%"
        height="100%"
      />
    </div>
  ))
  .add('dynamic', () => {
    const Wrapper = () => {
      const defaultValue = 50;
      const [value, setValue] = React.useState<number>(defaultValue);
      return (
        <div>
          <CircularProgressMeter value={value} color={MeterColor.Green} />
          <input
            type="range"
            style={{
              marginLeft: 20
            }}
            value={value}
            onChange={x => setValue(x.target.valueAsNumber)}
          />
        </div>
      );
    };
    return <Wrapper />;
  });
