import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { TextArea } from './TextArea';

storiesOf('Components|TextArea', module)
  .addDecorator(hostDecorator())
  .add('text', () => <TextArea />)
  .add('autoFocus', () => <TextArea autoFocus />)
  .add('fullWidth', () => <TextArea fullWidth />)
  .add('maxLength', () => <TextArea maxLength={3} />)
  .add('readOnly', () => <TextArea value="Read only" readOnly />)
  .add('value', () => <TextArea value="Text" />)
  .add('placeholder', () => <TextArea placeholder="Placeholder" />)
  .add('disabled', () => <TextArea value="Text" disabled />)
  .add('blurOnEnter', () => <TextArea blurOnEnter />)
  .add('error', () => <TextArea error />)
  .add('onFocus', () => <TextArea onFocus={action('onFocus')} />)
  .add('onBlur', () => <TextArea onBlur={action('onBlur')} />)
  .add('onChange', () => <TextArea onChange={action('onChange')} />);
