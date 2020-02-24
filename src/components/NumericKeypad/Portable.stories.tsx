import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { PortableKeypad } from './PortableKeypad';

const ShowAnimation = ({}) => {
  const [open, setOpen] = React.useState<boolean>(true);
  return (
    <>
      Open/Close with an animation:
      <input type="checkbox" checked={open} onChange={() => setOpen(!open)}></input>
      <PortableKeypad
        open={open}
        onChange={action('onChange')}
        onDeleteSelect={action('onDeleteSelect')}
      />
    </>
  );
};

storiesOf('Components|NumericKeypad.PortableKeypad', module)
  .addDecorator(hostDecorator({}))
  .add('Open', () => (
    <PortableKeypad open onChange={action('onChange')} onDeleteSelect={action('onDeleteSelect')} />
  ))
  .add('Close', () => (
    <PortableKeypad
      open={false}
      onChange={action('onChange')}
      onDeleteSelect={action('onDeleteSelect')}
    />
  ))
  .add('Animation', () => <ShowAnimation />);
