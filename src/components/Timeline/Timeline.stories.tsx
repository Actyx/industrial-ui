import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Timeline, TimelineEvent as TimelineEventType } from './Timeline';
import { TimelineEvent } from './TimelineEvent';
import { StatusComponent } from './Status';
import { Content } from './Content';
import { green, orange, lightGreen } from '../../colors';

const COLOR_GREEN_LIGHT = lightGreen.A700;
const COLOR_GREEN = green[500];
const COLOR_ORANGE = orange[700];
const COLOR_ORANGE_DARK = orange[500];

const formatDate = (timestamp: number) => <>{new Date(timestamp).toLocaleString('en-US')}</>;

const DESCRIPTION =
  'Misalignment, continues the paper, exists when the centre lines of two neighbouring machines deviate from each other.';

const BASE_PROP_EVENTS = {
  domId: '1',
  content: {
    title: 'Misalignment',
    dateFormatted: formatDate(1519223596657),
    description: DESCRIPTION
  }
};

const baseProps: {
  events: ReadonlyArray<TimelineEventType>;
  scrollToLast: boolean;
} = {
  events: [
    {
      color: COLOR_ORANGE,
      arrangement: 'start',
      title: 'Improper or inadequate maintenance',
      dateFormated: formatDate(1519296926000),
      description:
        'Error in machine maintenance, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius felis fringilla felis volutpat volutpat. Nunc felis mi, placerat vitae posuere nec, condimentum in lectus.'
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'continue',
      title: 'Assembly errors',
      dateFormated: formatDate(1519300526000),
      description:
        'Mechanical error on the assembly line, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius felis fringilla felis volutpat volutpat. Nunc felis mi, placerat vitae posuere nec, condimentum in lectus.'
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'end',
      title: 'Assembly errors',
      dateFormated: formatDate(1519304126000),
      description: 'Calibration error on the assembly line.'
    },
    {
      color: COLOR_GREEN,
      arrangement: 'single',
      title: 'Resolved',
      dateFormated: formatDate(1519307726000)
    }
  ],
  scrollToLast: true
};

const intervalsProps: {
  events: ReadonlyArray<TimelineEventType>;
  scrollToLast: boolean;
} = {
  events: [
    {
      color: COLOR_ORANGE,
      arrangement: 'start',
      title: 'Improper or inadequate maintenance',
      dateFormated: formatDate(1517448369000),
      description:
        'Error in machine maintenance, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius felis fringilla felis volutpat volutpat. Nunc felis mi, placerat vitae posuere nec, condimentum in lectus.'
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'continue',
      title: 'Assembly errors',
      dateFormated: formatDate(1517451969000),
      description:
        'Mechanical error on the assembly line, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius felis fringilla felis volutpat volutpat. Nunc felis mi, placerat vitae posuere nec, condimentum in lectus.'
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'end',
      title: 'Assembly errors',
      dateFormated: formatDate(1517455569000),
      description: 'Calibration error on the assembly line.'
    },
    {
      color: COLOR_GREEN,
      arrangement: 'single',
      title: 'Resolved',
      dateFormated: formatDate(1517459169000)
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'start',
      title: 'Improper or inadequate maintenance',
      dateFormated: formatDate(1517462769000),
      description:
        'Error in machine maintenance, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius felis fringilla felis volutpat volutpat. Nunc felis mi, placerat vitae posuere nec, condimentum in lectus.'
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'end',
      title: 'Assembly errors',
      dateFormated: formatDate(1517466369000),
      description: 'Calibration error on the assembly line.'
    },
    {
      color: COLOR_GREEN,
      arrangement: 'single',
      title: 'Resolved',
      dateFormated: formatDate(1517469969000)
    },
    {
      color: COLOR_ORANGE,
      arrangement: 'single',
      title: 'Assembly errors',
      dateFormated: formatDate(1517473569000)
    },
    {
      color: COLOR_GREEN,
      arrangement: 'single',
      title: 'Resolved',
      dateFormated: formatDate(1517477169000)
    }
  ],
  scrollToLast: true
};

storiesOf('Components/Timeline', module)
  .addDecorator(
    hostDecorator({
      position: 'absolute',
      top: 0,
      left: 0,
      width: 600,
      height: 600
    })
  )
  .add('Base', () => <Timeline {...baseProps} />)
  .add('Intervals', () => <Timeline {...intervalsProps} />)
  .add('Part event single', () => {
    const props = {
      domId: '1',
      content: {
        title: 'Resumed',
        dateFormatted: formatDate(1519297197594)
      },
      status: { color: COLOR_GREEN, arrangement: 'single' as 'single' }
    };
    return <TimelineEvent {...props} />;
  })
  .add('Part event start', () => {
    const props = {
      ...BASE_PROP_EVENTS,
      status: { color: COLOR_ORANGE, arrangement: 'start' as 'start' }
    };
    return <TimelineEvent {...props} />;
  })
  .add('Part event continue', () => {
    const props = {
      ...BASE_PROP_EVENTS,
      status: { color: COLOR_ORANGE, arrangement: 'continue' as 'continue' }
    };
    return <TimelineEvent {...props} />;
  })
  .add('Part event end', () => {
    const props = {
      ...BASE_PROP_EVENTS,
      status: { color: COLOR_ORANGE, arrangement: 'end' as 'end' }
    };
    return <TimelineEvent {...props} />;
  })
  .add('Part status single', () => (
    <StatusComponent color={COLOR_GREEN_LIGHT} arrangement="single" />
  ))
  .add('Part status start', () => <StatusComponent color={COLOR_ORANGE_DARK} arrangement="start" />)
  .add('Part status middle', () => (
    <StatusComponent color={COLOR_ORANGE_DARK} arrangement="continue" />
  ))
  .add('Part status end', () => <StatusComponent color={COLOR_ORANGE_DARK} arrangement="end" />)
  .add('Part content base', () => (
    <Content title="Misalignment" dateFormatted={formatDate(1519223596657)} />
  ))
  .add('Part content description', () => {
    const props = {
      title: 'Misalignment',
      dateFormatted: formatDate(1519223596657),
      description:
        'Misalignment, continues the paper, exists when the centre lines of two neighbouring machines deviate from each other.'
    };
    return <Content {...props} />;
  });
