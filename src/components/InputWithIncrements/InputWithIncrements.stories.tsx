import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { InputWithIncrements } from './InputWithIncrements';

const baseProps = {
  onChange: action('onChange'),
  incrementMin: 1,
  incrementMed: 5,
  incrementMax: 10
};

storiesOf('Components|InputWithIncrements', module)
  .addDecorator(
    hostDecorator({
      width: 600
    })
  )
  .add('base', () => {
    const props = { ...baseProps };
    return <InputWithIncrements {...props} />;
  })
  .add('defaultValue', () => {
    const props = {
      ...baseProps,
      defaultValue: 20
    };
    return <InputWithIncrements {...props} />;
  })
  .add('calculationDelay', () => {
    const props = {
      ...baseProps,
      incrementMin: 1,
      incrementMed: 10,
      incrementMax: 100,
      calculationDelay: 4000
    };
    return <InputWithIncrements {...props} />;
  });
