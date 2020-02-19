import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Input } from './Input';

storiesOf('Components|Input', module)
  .addDecorator(hostDecorator())
  .add('Type number', () => <Input type="number" />)
  .add('Type text', () => <Input type="text" />)
  .add('Value', () => <Input type="text" value="Text" />)
  .add('Max length', () => <Input type="text" maxLength={3} />)
  .add('Read only', () => <Input type="text" value="Read only" readOnly />)
  .add('Placeholder', () => <Input type="text" placeholder="Placeholder" />)
  .add('Disabled', () => <Input type="text" value="Text" disabled />)
  .add('BlurOnEnter', () => <Input type="text" blurOnEnter />)
  .add('Error', () => <Input type="text" error />)
  .add('Full width', () => <Input type="text" fullWidth />)
  .add('Auto focus', () => <Input type="text" autoFocus />)
  .add('onClick', () => <Input type="text" onClick={action('onClick')} />)
  .add('onFocus', () => <Input type="text" onFocus={action('onFocus')} />)
  .add('onBlur', () => <Input type="text" onBlur={action('onBlur')} />)
  .add('onChange', () => <Input type="text" onChange={action('onChange')} />)
  .add('onKeyDOwn', () => <Input type="text" onKeyDown={action('onKeyDown')} />);
