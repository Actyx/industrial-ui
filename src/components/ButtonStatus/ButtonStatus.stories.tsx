import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { ButtonStatus } from './ButtonStatus';

const baseProps = {
  text: 'Platform 1',
  onSelect: action('onSelect')
};

storiesOf('Components/ButtonStatus', module)
  .addDecorator(hostDecorator())

  .add('Selected icon', () => {
    const props = {
      ...baseProps,
      selected: true,
      icon: 'person'
    };
    return <ButtonStatus {...props} />;
  })
  .add('Unselected icon', () => {
    const props = {
      ...baseProps,
      selected: false,
      icon: 'person'
    };
    return <ButtonStatus {...props} />;
  })
  .add('Selected no icon', () => {
    const props = {
      ...baseProps,
      selected: true
    };
    return <ButtonStatus {...props} />;
  })
  .add('Unselected no icon', () => {
    const props = {
      ...baseProps,
      selected: false
    };
    return <ButtonStatus {...props} />;
  })
  .add('Text', () => {
    const props = {
      ...baseProps,
      selected: false
    };
    return <ButtonStatus {...props} />;
  })
  .add('Long text', () => {
    const props = {
      ...baseProps,
      text: 'Very long content',
      selected: false
    };
    return <ButtonStatus {...props} />;
  });
