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

const styles: StyleSheet<ClassKey, CompProps> = {
  root: {
    width: 135,
    height: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ready: {
    border: `1px solid ${theme.palette.success.main}`,
    backgroundColor: theme.palette.success.light,
    '& span > span': {
      color: theme.palette.primary.contrastText
    }
  },
  unknown: {
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[100],
    '& span > span': {
      color: theme.palette.grey[900]
    }
  },
  requested: {
    border: `1px solid ${theme.palette.warning.main}`,
    backgroundColor: theme.palette.warning.main,
    '& span > span': {
      color: theme.palette.primary.contrastText
    }
  }
};

export const Status = compose<Props, CompProps>(
  setDisplayName('Status'),
  injectSheet(styles)
)(StatusComp);
