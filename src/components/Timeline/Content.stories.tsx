import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Content } from './Content';

const baseProps = {
  title: 'Misalignment',
  timestamp: 1519223596657
};

storiesOf('Components|Timeline.Content', module)
  .addDecorator(
    hostDecorator({
      width: 600
    })
  )
  .add('base', () => <Content {...baseProps} />)
  .add('description', () => {
    const props = {
      ...baseProps,
      description:
        'Misalignment, continues the paper, exists when the centre lines of two neighbouring machines deviate from each other.'
    };
    return <Content {...props} />;
  });
