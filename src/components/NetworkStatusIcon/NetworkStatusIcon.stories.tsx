import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { NetworkStatusIcon } from './NetworkStatusIcon';
import { hostDecorator } from '../../utils';
import { grey, red } from '../../colors';

storiesOf('Components|NetworkStatusIcon', module)
  .addDecorator(
    hostDecorator({
      backgroundColor: grey[400],
      width: '100%',
      height: '100%'
    })
  )
  .add('Light connected', () => (
    <NetworkStatusIcon networkStatus="connected" variant="light" onSelect={action('onSelect')} />
  ))
  .add('Light partially connected', () => (
    <NetworkStatusIcon
      networkStatus="partiallyConnected"
      variant="light"
      onSelect={action('onSelect')}
    />
  ))
  .add('Light disconnected', () => (
    <NetworkStatusIcon networkStatus="disconnected" variant="light" onSelect={action('onSelect')} />
  ))
  .add('Dark connected', () => (
    <NetworkStatusIcon networkStatus="connected" variant="dark" onSelect={action('onSelect')} />
  ))
  .add('Dark partially connected', () => (
    <NetworkStatusIcon
      networkStatus="partiallyConnected"
      variant="dark"
      onSelect={action('onSelect')}
    />
  ))
  .add('Dark disconnected', () => (
    <NetworkStatusIcon networkStatus="disconnected" variant="dark" onSelect={action('onSelect')} />
  ))
  .add('Color red', () => (
    <NetworkStatusIcon
      networkStatus="disconnected"
      variant="dark"
      color={red[500]}
      onSelect={action('onSelect')}
    />
  ));
