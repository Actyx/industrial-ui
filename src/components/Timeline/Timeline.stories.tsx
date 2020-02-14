import { storiesOf } from '@storybook/react';
import { theme } from '../../theme';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Timeline, TimelineEvent } from './Timeline';

const COLOR_GREEN = theme.palette.signal.greenDark;
const COLOR_ORANGE = theme.palette.signal.orangeDark;

const baseProps: {
  events: ReadonlyArray<TimelineEvent>;
  scrollToLast: boolean;
} = {
  events: [
    {
      color: COLOR_ORANGE,
      arrangement: 'start',
      title: 'Improper or inadequate maintenance',
      timestamp: 1519296926000,
      description:
        'Error in machine maintenance, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius felis fringilla felis volutpat volutpat. Nunc felis mi, placerat vitae posuere nec, condimentum in lectus.'
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'continue',
      title: 'Assembly errors',
      timestamp: 1519300526000,
      description:
        'Mechanical error on the assembly line, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius felis fringilla felis volutpat volutpat. Nunc felis mi, placerat vitae posuere nec, condimentum in lectus.'
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'end',
      title: 'Assembly errors',
      timestamp: 1519304126000,
      description: 'Calibration error on the assembly line.'
    },
    {
      color: COLOR_GREEN,
      arrangement: 'single',
      title: 'Resolved',
      timestamp: 1519307726000
    }
  ],
  scrollToLast: true
};

const intervalsProps: {
  events: ReadonlyArray<TimelineEvent>;
  scrollToLast: boolean;
} = {
  events: [
    {
      color: COLOR_ORANGE,
      arrangement: 'start',
      title: 'Improper or inadequate maintenance',
      timestamp: 1517448369000,
      description:
        'Error in machine maintenance, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius felis fringilla felis volutpat volutpat. Nunc felis mi, placerat vitae posuere nec, condimentum in lectus.'
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'continue',
      title: 'Assembly errors',
      timestamp: 1517451969000,
      description:
        'Mechanical error on the assembly line, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius felis fringilla felis volutpat volutpat. Nunc felis mi, placerat vitae posuere nec, condimentum in lectus.'
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'end',
      title: 'Assembly errors',
      timestamp: 1517455569000,
      description: 'Calibration error on the assembly line.'
    },
    {
      color: COLOR_GREEN,
      arrangement: 'single',
      title: 'Resolved',
      timestamp: 1517459169000
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'start',
      title: 'Improper or inadequate maintenance',
      timestamp: 1517462769000,
      description:
        'Error in machine maintenance, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius felis fringilla felis volutpat volutpat. Nunc felis mi, placerat vitae posuere nec, condimentum in lectus.'
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'end',
      title: 'Assembly errors',
      timestamp: 1517466369000,
      description: 'Calibration error on the assembly line.'
    },
    {
      color: COLOR_GREEN,
      arrangement: 'single',
      title: 'Resolved',
      timestamp: 1517469969000
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'single',
      title: 'Assembly errors',
      timestamp: 1517473569000
    },
    {
      color: COLOR_GREEN,
      arrangement: 'single',
      title: 'Resolved',
      timestamp: 1517477169000
    }
  ],
  scrollToLast: true
};

storiesOf('common|Timeline.Timeline', module)
  .addDecorator(hostDecorator({}))
  .add('base', () => <Timeline {...baseProps} />)
  .add('intervals', () => <Timeline {...intervalsProps} />);
