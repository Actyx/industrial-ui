import { Typography } from '../Typography';
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

export type StatusVariant = 'ready' | 'unknown' | 'requested';

type CompProps = Readonly<{
  variant: StatusVariant;
  message: string;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const StatusComp = ({ classes, variant: status }: Props) => (
  <div className={classNames(classes.root, classes[status])}>
    <Typography variant="standard" bold textTransform="uppercase">
      {status}
    </Typography>
  </div>
);

type ClassKey = 'root' | StatusVariant;

const { green, greenDark, orange, orangeDark } = theme.palette.signal;
const { mediumGrey, light150, white, dark400 } = theme.palette.grey;

const styles: StyleSheet<ClassKey, CompProps> = {
  root: {
    width: 135,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ready: {
    border: `1px solid ${greenDark}`,
    backgroundColor: green,
    '& span > span': {
      color: white
    }
  },
  unknown: {
    border: `1px solid ${mediumGrey}`,
    backgroundColor: light150,
    '& span > span': {
      color: dark400
    }
  },
  requested: {
    border: `1px solid ${orangeDark}`,
    backgroundColor: orange,
    '& span > span': {
      color: white
    }
  }
};

export const Status = compose<Props, CompProps>(
  setDisplayName('Status'),
  injectSheet(styles)
)(StatusComp);
