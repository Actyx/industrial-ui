import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

export type Arrangement = 'single' | 'start' | 'continue' | 'end';

export type StatusType = Readonly<{
  color: string;
  arrangement: Arrangement;
}>;

type CompProps = Readonly<StatusType>;

type ClassKey = 'root' | 'lineWrapper' | 'line' | 'circleWrapper' | 'circle';

type Props = WithStyles<ClassKey> & CompProps;

const lineWrapperStyles: Record<Arrangement, React.CSSProperties> = {
  single: {
    height: 0
  },
  start: {
    paddingTop: 8
  },
  continue: {
    paddingTop: 0
  },
  end: {
    paddingTop: 0,
    height: 8
  }
};

const StatusComp = ({ classes, color, arrangement }: Props) => (
  <div className={classes.root}>
    <div className={classes.lineWrapper} style={lineWrapperStyles[arrangement]}>
      <div className={classes.line} style={{ backgroundColor: color }} />
    </div>
    <div className={classes.circleWrapper}>
      <div className={classes.circle} style={{ backgroundColor: color }} />
    </div>
  </div>
);

const circleSize = 16;

const styles: StyleSheet<ClassKey> = {
  root: {},
  lineWrapper: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  line: {
    width: 2,
    height: '100%'
  },
  circleWrapper: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 8
  },
  circle: {
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2
  }
};

export const StatusComponent = compose<Props, CompProps>(
  setDisplayName('Status'),
  injectSheet(styles)
)(StatusComp);
