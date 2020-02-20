import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { GaugeProgress, GaugeProgressColor } from './GaugeProgress';

const baseProps = {
  color: GaugeProgressColor.Green
};

storiesOf('Components|GaugeProgress', module)
  .addDecorator(hostDecorator({}))
  .add('Value 50%', () => <GaugeProgress {...baseProps} value={50} />)
  .add('Value 75%', () => <GaugeProgress {...baseProps} value={75} />)
  .add('Value 100%', () => <GaugeProgress {...baseProps} value={100} />)
  .add('Value 150%', () => <GaugeProgress {...baseProps} value={150} />)
  .add('Color blue', () => <GaugeProgress value={60} color={GaugeProgressColor.Blue} />)
  .add('Color green', () => <GaugeProgress value={60} color={GaugeProgressColor.Green} />)
  .add('Butt', () => <GaugeProgress value={60} color={GaugeProgressColor.Green} lineCap="butt" />)
  .add('Round', () => <GaugeProgress value={60} color={GaugeProgressColor.Green} lineCap="round" />)
  .add('Resize', () => (
    <div
      style={{
        width: 500,
        height: 500
      }}
    >
      <GaugeProgress
        value={60}
        color={GaugeProgressColor.Green}
        lineCap="round"
        width="100%"
        height="100%"
      />
    </div>
  ))
  .add('Dynamic', () => {
    const Wrapper = () => {
      const defaultValue = 50;
      const [value, setValue] = React.useState<number>(defaultValue);
      return (
        <div>
          <GaugeProgress value={value} color={GaugeProgressColor.Green} />
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