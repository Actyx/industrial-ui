import { action } from '@storybook/addon-actions';
import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Button } from './Button';

storiesOf('common|Button', module)
  .addDecorator(withKnobs)
  .addDecorator(hostDecorator())
  .add('flat transparent text', () => (
    <Button variant="flat" color="transparent" text="Button" onClick={action('onClick')} />
  ))
  .add('flat transparent icon text', () => (
    <Button
      variant="flat"
      color="transparent"
      icon="assignment"
      text="Button"
      onClick={action('onClick')}
    />
  ))
  .add('flat transparent icon', () => (
    <Button variant="flat" color="transparent" icon="assignment" onClick={action('onClick')} />
  ))
  .add('raised primary text', () => (
    <Button variant="raised" color="primary" text="Button" onClick={action('onClick')} />
  ))
  .add('raised primary icon text', () => (
    <Button
      variant="raised"
      color="primary"
      icon="assignment"
      text="Button"
      onClick={action('onClick')}
    />
  ))
  .add('green', () => (
    <Button
      variant="raised"
      color="green"
      icon="assignment"
      text="Button"
      onClick={action('onClick')}
    />
  ))
  .add('orange', () => (
    <Button
      variant="raised"
      color="orange"
      icon="assignment"
      text="Button"
      onClick={action('onClick')}
    />
  ))
  .add('yellow', () => (
    <Button
      variant="raised"
      color="yellow"
      icon="assignment"
      text="Button"
      onClick={action('onClick')}
    />
  ))
  .add('red', () => (
    <Button
      variant="raised"
      color="red"
      icon="assignment"
      text="Button"
      onClick={action('onClick')}
    />
  ))
  .add('disabled', () => (
    <Button
      variant="raised"
      color="red"
      icon="assignment"
      text="Button"
      disabled
      onClick={action('onClick')}
    />
  ))
  .add('fullWidth', () => (
    <div style={{ width: 400 }}>
      <Button
        variant="raised"
        color="primary"
        icon="assignment"
        text="Button"
        fullWidth
        onClick={action('onClick')}
      />
    </div>
  ))
  .add('fullWidth centered', () => (
    <div style={{ width: 400 }}>
      <Button
        centered
        variant="raised"
        color="primary"
        icon="assignment"
        text="Button"
        fullWidth
        onClick={action('onClick')}
      />
    </div>
  ))
  .add('raised primary icon', () => (
    <Button variant="raised" color="primary" icon="assignment" onClick={action('onClick')} />
  ))
  .add('raised primary icon text long', () => (
    <Button
      variant="raised"
      color="primary"
      icon="assignment"
      text="Button with long tex"
      onClick={action('onClick')}
    />
  ))
  .add('raised neutral text +1', () => (
    <Button variant="raised" color="neutral" text="+1" onClick={action('onClick')} />
  ))
  .add('raised primary no wrap', () => (
    <div style={{ width: 100 }}>
      <Button
        variant="raised"
        color="primary"
        icon="assignment"
        text="Button with long tex"
        noWrap
        onClick={action('onClick')}
      />
    </div>
  ))
  .add('dynamic', () => {
    const colorKnob = object('Props', {
      variant: 'raised' as 'raised',
      color: 'light200' as 'light200',
      icon: 'person',
      text: 'Add User',
      disabled: false,
      fullWith: false
    });
    return <Button {...colorKnob} onClick={action('onClick')} />;
  });
