import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { Content, ContentType } from './Content';
import { Status, StatusType } from './Status';

// TODO FIX THE TIMESTAMPS
type CompProps = Readonly<{
  domId: string;
  status: StatusType;
  content: ContentType;
}>;

type ClassKey = 'root' | 'status' | 'content';

type Props = WithStyles<ClassKey> & CompProps;

const TimelineEventComp = ({ classes, domId, status, content }: Props) => (
  <div className={classes.root} id={domId}>
    <div className={classes.status}>
      <Status {...status} />
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
