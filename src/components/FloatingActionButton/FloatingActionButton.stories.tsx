import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { FloatingActionButton } from './FloatingActionButton';

storiesOf('Components|FloatingActionButton', module)
  .addDecorator(hostDecorator())
  .add('sm', () => (
    <FloatingActionButton size="sm" icon="close" color="primary" onClick={action('onClick')} />
  ))
  .add('md', () => (
    <FloatingActionButton size="md" icon="close" color="primary" onClick={action('onClick')} />
  ))
  .add('xl', () => (
    <FloatingActionButton size="xl" icon="close" color="primary" onClick={action('onClick')} />
  ))
  .add('disabled', () => (
    <FloatingActionButton
      size="xl"
      icon="close"
      color="primary"
      onClick={action('onClick')}
      disabled
    />
  ))
  .add('neutral', () => (
    <FloatingActionButton size="sm" icon="close" color="neutral" onClick={action('onClick')} />
  ));
