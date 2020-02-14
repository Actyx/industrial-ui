import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Chevron, ChevronType } from './Chevron';

const Animate = ({ type }: { type: ChevronType }) => {
  const [down, setDown] = React.useState<boolean>(false);
  const [animation, setAnimation] = React.useState<boolean>(true);
  return (
    <div>
      <Chevron down={down} animation={animation} onSelect={() => setDown(!down)} type={type} />
      <div>
        <label htmlFor="enable-animation">Enable animation:</label>
        <input
          name="enable-animation"
          style={{ marginTop: 20, marginLeft: 10 }}
          type="checkbox"
          checked={animation}
          onChange={() => setAnimation(!animation)}
        />
      </div>
    </div>
  );
};

storiesOf('Components|Chevron', module)
  .addDecorator(hostDecorator())
  .add('standard', () => <Chevron variant="standard" />)
  .add('small', () => <Chevron variant="small" />)
  .add('up-down up', () => <Chevron />)
  .add('up-down down', () => <Chevron down />)
  .add('up-down animate', () => <Animate type="up-down" />)
  .add('callback', () => <Chevron onSelect={action('onSelect')} />)
  .add('right-down right', () => <Chevron type="right-down" />)
  .add('right-down down', () => <Chevron type="right-down" down />)
  .add('right-down animate', () => <Animate type="right-down" />);
