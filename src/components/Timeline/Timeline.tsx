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
  timestamp: number;
  description?: string;
}>;

type CompProps = Readonly<{
  events: ReadonlyArray<TimelineEvent>;
  scrollToLast?: boolean;
}>;

type Props = WithStyles<ClassKey> & CompProps;

type State = Readonly<{}>;

class TimelineComp extends React.Component<Props, State> {
  state: State = {};

  elementId(idx: number): string {
    return `${idx}-${this.props.events[idx].timestamp}`;
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
          {events.map(({ color, arrangement, title, timestamp, description }, idx: number) => {
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
                  timestamp,
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

export const Timeline = compose<Props, CompProps>(
  setDisplayName('Timeline'),
  injectSheet(styles)
)(TimelineComp);
