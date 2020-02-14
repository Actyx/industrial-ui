import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { Typography } from '../Typography';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { SimpleToolbar } from './SimpleToolbar';
import { SimpleToolbarButton } from './SimpleToolbarButton';

storiesOf('common|SimpleToolbar.SimpleToolbar', module)
  .addDecorator(
    hostDecorator({
      width: '100%'
    })
  )
  .add('dark', () => (
    <SimpleToolbar
      variant="dark"
      title="Report an Interruption"
      leftIcon={{
        icon: 'arrow_back',
        onClick: action('onClick leftIcon')
      }}
    />
  ))
  .add('light', () => (
    <SimpleToolbar
      variant="light"
      title="Report an Interruption"
      leftIcon={{
        icon: 'arrow_back',
        onClick: action('onClick leftIcon')
      }}
    />
  ))
  .add('dark right icon', () => (
    <SimpleToolbar
      variant="dark"
      title="Report an Interruption"
      leftIcon={{
        icon: 'close',
        onClick: action('onClick leftIcon')
      }}
      rightIcon={{
        icon: 'arrow_forward',
        onClick: action('onClick rightIcon')
      }}
    />
  ))
  .add('light right icon', () => (
    <SimpleToolbar
      variant="light"
      title="Report an Interruption"
      leftIcon={{
        icon: 'close',
        onClick: action('onClick leftIcon')
      }}
      rightIcon={{
        icon: 'arrow_forward',
        onClick: action('onClick rightIcon')
      }}
    />
  ))
  .add('light right button', () => (
    <SimpleToolbar
      variant="light"
      title="Report an Interruption"
      leftIcon={{
        icon: 'close',
        onClick: action('onClick leftIcon')
      }}
      rightIcon={{
        icon: 'arrow_forward',
        onClick: action('onClick rightIcon')
      }}
    />
  ))
  .add('light right', () => (
    <SimpleToolbar
      variant="light"
      title="Report an Interruption"
      leftIcon={{
        icon: 'close',
        onClick: action('onClick leftIcon')
      }}
      rightComponent={{
        component: <SimpleToolbarButton text="Confirm" />,
        onClick: action('onClick rightComponent')
      }}
    />
  ))
  .add('center component', () => (
    <SimpleToolbar
      variant="light"
      title="Report an Interruption"
      leftIcon={{
        icon: 'close',
        onClick: action('onClick leftIcon')
      }}
      centerComponent={
        <div
          style={{
            width: 300,
            flex: 1,
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Typography variant="distance">Center Component</Typography>
        </div>
      }
      rightComponent={{
        component: <SimpleToolbarButton text="Confirm" />,
        onClick: action('onClick rightComponent')
      }}
    />
  ));
