import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { Content } from './Content';
import { StatusComponent } from './Status';
import { TimelineStatusType } from './Timeline';

export type TimelineEventContent = Readonly<{
  title: string;
  timestamp: number;
  description?: string;
}>;

type CompProps = Readonly<{
  domId: string;
  status: TimelineStatusType;
  content: TimelineEventContent;
}>;

type ClassKey = 'root' | 'status' | 'content';

type Props = WithStyles<ClassKey> & CompProps;

const TimelineEventComp = ({ classes, domId, status, content }: Props) => (
  <div className={classes.root} id={domId}>
    <div className={classes.status}>
      <StatusComponent {...status} />
    </div>
    <div className={classes.content}>
      <Content {...content} />
    </div>
  </div>
);

const styles: StyleSheet<ClassKey> = {
  root: {
    position: 'relative'
  },
  status: {
    position: 'absolute',
    height: '100%',
    width: 20
  },
  content: {
    marginLeft: 32
  }
};

export const TimelineEvent = compose<Props, CompProps>(
  setDisplayName('TimelineEvent'),
  injectSheet(styles)
)(TimelineEventComp);
