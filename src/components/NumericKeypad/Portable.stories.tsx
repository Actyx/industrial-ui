import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { PortableKeypad } from './PortableKeypad';

storiesOf('Components/NumericKeypad/PortableKeypad', module)
  .addDecorator(hostDecorator())
  .add('Base', () => (
    <PortableKeypad onChange={action('onChange')} onDeleteSelect={action('onDeleteSelect')} />
  ));
