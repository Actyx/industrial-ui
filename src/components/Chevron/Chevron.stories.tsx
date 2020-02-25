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

storiesOf('Components/Chevron', module)
  .addDecorator(hostDecorator())
  .add('Size sm', () => <Chevron size="sm" />)
  .add('Size md', () => <Chevron size="md" />)
  .add('Up-down animate', () => <Animate type="upDown" />)
  .add('Right-down animate', () => <Animate type="rightDown" />)
  .add('onSelect', () => <Chevron onSelect={action('onSelect')} />);
