import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { ButtonCircular } from './ButtonCircular';

storiesOf('Components|ButtonCircular', module)
  .addDecorator(hostDecorator())
  .add('neutral value', () => (
    <ButtonCircular value="7" color="neutral" onSelect={action('onSelect')} />
  ))
  .add('neutral icon', () => (
    <ButtonCircular value="arrow_forward" color="neutral" icon onSelect={action('onSelect')} />
  ))
  .add('primary icon', () => (
    <ButtonCircular value="arrow_forward" color="primary" icon onSelect={action('onSelect')} />
  ));
