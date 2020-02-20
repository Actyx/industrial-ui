import { theme } from '../../theme';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { SignalCircular } from '../SignalCircular';
import { Typography } from '../Typography';

export type SignalStatusStatus =
  | 'running'
  | 'idle'
  | 'not started'
  | 'interrupted'
  | 'finished'
  | 'waiting'
  | 'unreleased';

type OuterProps = Readonly<{
  status: SignalStatusStatus;
  text?: string;
}>;

type Props = WithStyles<ClassKey> & OuterProps;

const SignalStatusComp = ({ classes, status, text }: Props) => {
  const isInterrupted = status === 'interrupted';
  const { red } = theme.palette.signal;
  return (
    <div className={classes.root}>
      <div>
        <SignalCircular
          size="xs"
          color={
            status === 'running'
              ? 'green'
              : status === 'interrupted'
              ? 'red'
              : status === 'idle'
              ? 'lightGrey'
              : 'darkGrey'
          }
        />
      </div>
      <div className={classes.text}>
        <Typography
          variant="standard"
          textTransform="uppercase"
          color={isInterrupted ? red : undefined}
          bold={isInterrupted || undefined}
        >
          {status}
        </Typography>
        {text && (
          <Typography
            variant="standard"
            textTransform="capitalize"
            color={isInterrupted ? red : undefined}
            bold={isInterrupted || undefined}
          >
            {`: ${text}`}
          </Typography>
        )}
      </div>
    </div>
  );
};
type ClassKey = 'root' | 'text';

const styles: StyleSheet<ClassKey, OuterProps> = {
  root: {
    display: 'flex',
    height: 30,
    '& > div:first-child': {
      display: 'flex',
      marginRight: 5,
      height: '100%',
      alignItems: 'center'
    }
  },
  text: {
    whiteSpace: 'nowrap'
  }
};

export const SignalStatus = compose<Props, OuterProps>(
  setDisplayName('SignalStatus'),
  injectSheet(styles)
)(SignalStatusComp);
