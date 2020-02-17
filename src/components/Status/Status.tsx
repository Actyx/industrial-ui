import { Typography } from '../Typography';
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { WithStyles, StyleSheet } from '../../utils/jss';

export type StatusType = 'ready' | 'unknown' | 'requested';

type OuterProps = Readonly<{
  status: StatusType;
  message: string;
}>;

type Props = WithStyles<ClassKey> & OuterProps;

const StatusComp = ({ classes, status }: Props) => (
  <div className={classNames(classes.root, classes[status])}>
    <Typography variant="standard" bold textTransform="uppercase">
      {status}
    </Typography>
  </div>
);

type ClassKey = 'root' | StatusType;

const { green, greenDark, orange, orangeDark } = theme.palette.signal;
const { mediumGrey, light150, white, dark400 } = theme.palette.grey;

const styles: StyleSheet<ClassKey> = {
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

export const Status = compose<Props, OuterProps>(
  setDisplayName('Component'),
  injectSheet(styles)
)(StatusComp);
