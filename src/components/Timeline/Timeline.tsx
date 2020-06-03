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
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { TimelineEvent } from './TimelineEvent';

export type TimelineArrangement = 'single' | 'start' | 'continue' | 'end';

export type TimelineStatusType = Readonly<{
  color: string;
  arrangement: TimelineArrangement;
}>;

export type TimelineEvent = Readonly<{
  color: string;
  arrangement: TimelineArrangement;
  title: string;
  dateFormated: React.ReactNode;
  description?: string;
}>;

type CompProps = Readonly<{
  events: ReadonlyArray<{
    color: string;
    arrangement: 'single' | 'start' | 'continue' | 'end';
    title: string;
    dateFormated: React.ReactNode;
    description?: string;
  }>;
  scrollToLast?: boolean;
}>;

type Props = WithStyles<ClassKey> & CompProps;

type State = Readonly<{}>;

class TimelineComp extends React.Component<Props, State> {
  state: State = {};

  elementId(idx: number): string {
    return `${idx}-${this.props.events[idx].dateFormated}`;
  }

  scrollLastIntoView(): void {
    if (this.props.events.length === 0) {
      return;
    }

    const { events } = this.props;
    const id = this.elementId(events.length - 1);
    const elmLastEvent = document.getElementById(id);
    if (elmLastEvent) {
      elmLastEvent.scrollIntoView();
    }
  }

  componentDidMount(): void {
    if (this.props.scrollToLast) {
      this.scrollLastIntoView();
    }
  }

  render(): JSX.Element {
    const { classes, events } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.content}>
          {events.map(({ color, arrangement, title, dateFormated, description }, idx: number) => {
            const id = this.elementId(idx);
            return (
              <TimelineEvent
                domId={id}
                key={id}
                status={{
                  color,
                  arrangement
                }}
                content={{
                  title,
                  dateFormatted: dateFormated,
                  description
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

type ClassKey = 'root' | 'content';

const styles: StyleSheet<ClassKey> = {
  root: {},
  content: {
    display: 'flex',
    flexDirection: 'column'
  }
};

/**
 * Timeline represents a period, on which important events are marked.
 * A possible use case is a production line event log.
 */
export const Timeline = compose<Props, CompProps>(
  setDisplayName('Timeline'),
  injectSheet(styles)
)(TimelineComp);
