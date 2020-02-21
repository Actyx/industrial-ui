import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { GaugeProgress } from './GaugeProgress';

const baseProps = {
  value: 60,
  color: 'green' as 'green'
};

storiesOf('Components|GaugeProgress', module)
  .addDecorator(hostDecorator({}))
  .add('Value 50%', () => <GaugeProgress {...baseProps} value={50} />)
  .add('Value 75%', () => <GaugeProgress {...baseProps} value={75} />)
  .add('Value 100%', () => <GaugeProgress {...baseProps} value={100} />)
  .add('Value 150%', () => <GaugeProgress {...baseProps} value={150} />)
  .add('Color blue', () => <GaugeProgress {...baseProps} color="blue" />)
  .add('Color green', () => <GaugeProgress {...baseProps} />)
  .add('Butt', () => <GaugeProgress {...baseProps} lineCap="butt" />)
  .add('Round', () => <GaugeProgress {...baseProps} lineCap="round" />)
  .add('Resize', () => (
    <div style={{ width: 500, height: 500 }}>
      <GaugeProgress {...baseProps} lineCap="round" width="100%" height="100%" />
    </div>
  ))
  .add('Dynamic', () => {
    const DEFAULT_VALUE = 50;
    const Wrapper = () => {
      const [value, setValue] = React.useState<number>(DEFAULT_VALUE);
      return (
        <div>
          <GaugeProgress color="green" value={value} />
          <input
            type="range"
            style={{ marginLeft: 20 }}
            value={value}
            onChange={x => setValue(x.target.valueAsNumber)}
          />
        </div>
      );
    };
    return <Wrapper />;
  });
