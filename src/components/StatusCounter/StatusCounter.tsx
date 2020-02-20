import { Typography } from '../Typography';
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { StatusVariant } from '../Status';

type CompProps = Readonly<{
  variant: StatusVariant;
  counter: number;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const StatusCounterComp = ({ classes, variant, counter }: Props) => (
  <div className={classNames(classes.root, classes[variant])}>
    <Typography variant="subtext">{counter}⨉</Typography>
  </div>
);

const { green, greenDark, orange, orangeDark } = theme.palette.signal;
const { mediumGrey, light150, white, dark400 } = theme.palette.grey;

type ClassKey = 'root' | StatusVariant;

const styles: StyleSheet<ClassKey, CompProps> = {
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

export const StatusCounter = compose<Props, CompProps>(
  setDisplayName('StatusCounter'),
  injectSheet(styles)
)(StatusCounterComp);
