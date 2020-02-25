import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { FloatingActionButton } from './FloatingActionButton';

storiesOf('Components/FloatingActionButton', module)
  .addDecorator(hostDecorator())
  .add('Size sm', () => (
    <FloatingActionButton size="sm" icon="close" color="primary" onClick={action('onClick')} />
  ))
  .add('Size md', () => (
    <FloatingActionButton size="md" icon="close" color="primary" onClick={action('onClick')} />
  ))
  .add('Size xl', () => (
    <FloatingActionButton size="xl" icon="close" color="primary" onClick={action('onClick')} />
  ))
  .add('Disabled', () => (
    <FloatingActionButton
      size="xl"
      icon="close"
      color="primary"
      onClick={action('onClick')}
      disabled
    />
  ))
  .add('Neutral', () => (
    <FloatingActionButton size="sm" icon="close" color="neutral" onClick={action('onClick')} />
  ))
  .add('Secondary', () => (
    <FloatingActionButton size="sm" icon="close" color="secondary" onClick={action('onClick')} />
  ));
