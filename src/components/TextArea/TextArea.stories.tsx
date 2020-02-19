import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { TextArea } from './TextArea';

storiesOf('Components|TextArea', module)
  .addDecorator(hostDecorator())
  .add('Text', () => <TextArea />)
  .add('Auto focus', () => <TextArea autoFocus />)
  .add('Full width', () => <TextArea fullWidth />)
  .add('Max length', () => <TextArea maxLength={3} />)
  .add('Read only', () => <TextArea value="Read only" readOnly />)
  .add('Value', () => <TextArea value="Text" />)
  .add('Placeholder', () => <TextArea placeholder="Placeholder" />)
  .add('Disabled', () => <TextArea value="Text" disabled />)
  .add('Blur on enter', () => <TextArea blurOnEnter />)
  .add('Error', () => <TextArea error />)
  .add('Callback onFocus', () => <TextArea onFocus={action('onFocus')} />)
  .add('Callback onBlur', () => <TextArea onBlur={action('onBlur')} />)
  .add('Callback onChange', () => <TextArea onChange={action('onChange')} />);
