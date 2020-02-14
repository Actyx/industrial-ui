import { storiesOf } from '@storybook/react';
import { theme } from '../../theme';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { TimelineEvent } from './TimelineEvent';

const COLOR_GREEN = theme.palette.signal.greenDark;
const COLOR_ORANGE = theme.palette.signal.orangeDark;

const DESCRIPTION =
  'Misalignment, continues the paper, exists when the centre lines of two neighbouring machines deviate from each other.';

const baseProps = {
  domId: '1',
  content: {
    title: 'Misalignment',
    timestamp: 1519223596657,
    description: DESCRIPTION
  }
};

storiesOf('Components|Timeline.TimelineEvent', module)
  .addDecorator(
    hostDecorator({
      width: 400,
      height: 600
    })
  )
  .add('single', () => {
    const props = {
      domId: '1',
      content: {
        title: 'Resumed',
        timestamp: 1519297197594
      },
      status: { color: COLOR_GREEN, arrangement: 'single' as 'single' }
    };
    return <TimelineEvent {...props} />;
  })
  .add('start', () => {
    const props = {
      ...baseProps,
      status: { color: COLOR_ORANGE, arrangement: 'start' as 'start' }
    };
    return <TimelineEvent {...props} />;
  })
  .add('continue', () => {
    const props = {
      ...baseProps,
      status: { color: COLOR_ORANGE, arrangement: 'continue' as 'continue' }
    };
    return <TimelineEvent {...props} />;
  })
  .add('end', () => {
    const props = {
      ...baseProps,
      status: { color: COLOR_ORANGE, arrangement: 'end' as 'end' }
    };
    return <TimelineEvent {...props} />;
  });
