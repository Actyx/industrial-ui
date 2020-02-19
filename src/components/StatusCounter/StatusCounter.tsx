import { Typography } from '../Typography';
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { StatusType } from '../Status';

type OuterProps = Readonly<{
  status: StatusType;
  counter: number;
}>;

type Props = WithStyles<ClassKey> & OuterProps;

const StatusCounterComp = ({ classes, status, counter }: Props) => (
  <div className={classNames(classes.root, classes[status])}>
    <Typography variant="subtext">{counter}⨉</Typography>
  </div>
);

type ClassKey = 'root' | StatusType;

const { green, greenDark, orange, orangeDark } = theme.palette.signal;
const { mediumGrey, light150, white, dark400 } = theme.palette.grey;

const styles: StyleSheet<ClassKey, OuterProps> = {
  root: {
    height: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 10px 0 10px'
  },
  ready: {
    border: `1px solid ${greenDark}`,
    backgroundColor: green,
    '& span': {
      color: white
    }
  },
  unknown: {
    border: `1px solid ${mediumGrey}`,
    backgroundColor: light150,
    '& span': {
      color: dark400
    }
  },
  requested: {
    border: `1px solid ${orangeDark}`,
    backgroundColor: orange,
    '& span': {
      color: white
    }
  }
};

export const StatusCounter = compose<Props, OuterProps>(
  setDisplayName('StatusCounter'),
  injectSheet(styles)
)(StatusCounterComp);
