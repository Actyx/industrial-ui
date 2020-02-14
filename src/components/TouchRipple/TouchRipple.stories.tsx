import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { TouchRipple } from './TouchRipple';

const baseProps = {
  onClick: action('onClick')
};
storiesOf('common|TouchRipple', module)
  .addDecorator(
    hostDecorator({
      width: 200
    })
  )
  .add('base', () => (
    <TouchRipple {...baseProps}>
      <div>TouchRipple</div>
    </TouchRipple>
  ))
  .add('disabled', () => {
    const props = {
      ...baseProps,
      disabled: true
    };
    return (
      <TouchRipple {...props}>
        <div>TouchRipple</div>
      </TouchRipple>
    );
  });
