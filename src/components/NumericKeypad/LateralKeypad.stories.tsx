import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { LateralKeypad } from './LateralKeypad';

const ShowAnimation = ({}) => {
  const [open, setOpen] = React.useState<boolean>(true);
  return (
    <>
      Open/Close with an animation:
      <input type="checkbox" checked={open} onChange={() => setOpen(!open)}></input>
      <LateralKeypad
        open={open}
        onChange={action('onChange')}
        onDeleteSelect={action('onDeleteSelect')}
      />
    </>
  );
};

storiesOf('Components|NumericKeypad.LateralKeypad', module)
  .addDecorator(hostDecorator({}))
  .add('Open', () => (
    <LateralKeypad open onChange={action('onChange')} onDeleteSelect={action('onDeleteSelect')} />
  ))
  .add('Close', () => (
    <LateralKeypad
      open={false}
      onChange={action('onChange')}
      onDeleteSelect={action('onDeleteSelect')}
    />
  ))
  .add('Animation', () => <ShowAnimation />);
