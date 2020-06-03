/*
 * Copyright 2020 Actyx AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Timeline } from './Timeline';
import { TimelineEvent } from './TimelineEvent';
import { StatusComponent } from './Status';
import { Content } from './Content';
import { green, orange, lightGreen } from '../../colors';

storiesOf('Components/Timeline', module)
  .addParameters({ component: Timeline })
  .addDecorator(
    hostDecorator({
      width: 600,
      height: 600
    })
  )
  .add('Base', () => {
    type TimelineEventType = Readonly<{
      color: string;
      arrangement: 'single' | 'start' | 'continue' | 'end';
      title: string;
      dateFormated: React.ReactNode;
      description?: string;
    }>;

    const COLOR_GREEN = green[500];
    const COLOR_ORANGE = orange[700];

    const formatDate = (timestamp: number) => <>{new Date(timestamp).toLocaleString('en-US')}</>;

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
    return <Timeline {...baseProps} />;
  })
  .add('Intervals', () => {
    type TimelineEventType = Readonly<{
      color: string;
      arrangement: 'single' | 'start' | 'continue' | 'end';
      title: string;
      dateFormated: React.ReactNode;
      description?: string;
    }>;

    const COLOR_GREEN = green[500];
    const COLOR_ORANGE = orange[700];

    const formatDate = (timestamp: number) => <>{new Date(timestamp).toLocaleString('en-US')}</>;

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
    return <Timeline {...intervalsProps} />;
  })
  .add('Part event single', () => {
    const formatDate = (timestamp: number) => <>{new Date(timestamp).toLocaleString('en-US')}</>;
    const COLOR_GREEN = green[500];
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
    const formatDate = (timestamp: number) => <>{new Date(timestamp).toLocaleString('en-US')}</>;
    const DESCRIPTION =
      'Misalignment, continues the paper, exists when the centre lines of two neighbouring machines deviate from each other.';
    const COLOR_ORANGE = orange[700];
    const props = {
      domId: '1',
      content: {
        title: 'Misalignment',
        dateFormatted: formatDate(1519223596657),
        description: DESCRIPTION
      },
      status: { color: COLOR_ORANGE, arrangement: 'start' as 'start' }
    };
    return <TimelineEvent {...props} />;
  })
  .add('Part event continue', () => {
    const formatDate = (timestamp: number) => <>{new Date(timestamp).toLocaleString('en-US')}</>;
    const DESCRIPTION =
      'Misalignment, continues the paper, exists when the centre lines of two neighbouring machines deviate from each other.';
    const COLOR_ORANGE = orange[700];
    const props = {
      domId: '1',
      content: {
        title: 'Misalignment',
        dateFormatted: formatDate(1519223596657),
        description: DESCRIPTION
      },
      status: { color: COLOR_ORANGE, arrangement: 'continue' as 'continue' }
    };
    return <TimelineEvent {...props} />;
  })
  .add('Part event end', () => {
    const formatDate = (timestamp: number) => <>{new Date(timestamp).toLocaleString('en-US')}</>;
    const DESCRIPTION =
      'Misalignment, continues the paper, exists when the centre lines of two neighbouring machines deviate from each other.';
    const COLOR_ORANGE = orange[700];
    const props = {
      domId: '1',
      content: {
        title: 'Misalignment',
        dateFormatted: formatDate(1519223596657),
        description: DESCRIPTION
      },
      status: { color: COLOR_ORANGE, arrangement: 'end' as 'end' }
    };
    return <TimelineEvent {...props} />;
  })
  .add('Part status single', () => <StatusComponent color={lightGreen.A700} arrangement="single" />)
  .add('Part status start', () => <StatusComponent color={orange[500]} arrangement="start" />)
  .add('Part status middle', () => <StatusComponent color={orange[500]} arrangement="continue" />)
  .add('Part status end', () => <StatusComponent color={orange[500]} arrangement="end" />)
  .add('Part content base', () => {
    const formatDate = (timestamp: number) => <>{new Date(timestamp).toLocaleString('en-US')}</>;
    return <Content title="Misalignment" dateFormatted={formatDate(1519223596657)} />;
  })
  .add('Part content description', () => {
    const formatDate = (timestamp: number) => <>{new Date(timestamp).toLocaleString('en-US')}</>;
    const props = {
      title: 'Misalignment',
      dateFormatted: formatDate(1519223596657),
      description:
        'Misalignment, continues the paper, exists when the centre lines of two neighbouring machines deviate from each other.'
    };
    return <Content {...props} />;
  });
