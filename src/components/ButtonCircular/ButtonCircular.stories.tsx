import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { ButtonCircular } from './ButtonCircular';

storiesOf('Components/ButtonCircular', module)
  .addDecorator(hostDecorator())
  .add('Neutral value', () => (
    <ButtonCircular value="7" color="neutral" onSelect={action('onSelect')} />
  ))
  .add('Neutral icon', () => (
    <ButtonCircular value="arrow_forward" color="neutral" icon onSelect={action('onSelect')} />
  ))
  .add('Primary icon', () => (
    <ButtonCircular value="arrow_forward" color="primary" icon onSelect={action('onSelect')} />
  ));
