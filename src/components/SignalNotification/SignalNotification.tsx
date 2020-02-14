import { MUIcon } from '../MUIcon';
import { Typography } from '../Typography';
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { Divider } from '../Divider';

type OuterProps = Readonly<{
  className?: string;
  icon: string;
  text: React.ReactNode;
}>;

type Props = WithStyles<ClassKey> & OuterProps;

// FIXME why does not display properly?
const SignalNotificationComp = ({ classes, className, icon, text }: Props) => (
  <div className={classNames(classes.root, className)}>
    <Divider className={classes.divider} />
    <div className={classes.content}>
      <div className={classes.icon}>
        <MUIcon type={icon} color={theme.palette.signal.red} fontSize={93} />
      </div>
      <div className={classes.text}>
        <Typography variant="distance">{text}</Typography>
      </div>
    </div>
    <Divider className={classes.divider} />
  </div>
);

type ClassKey = 'root' | 'divider' | 'content' | 'icon' | 'text';

const styles: StyleSheet<ClassKey, OuterProps> = {
  root: {
    width: '100%',
    '& hr:first-child': {
      marginBottom: 15
    },
    '& hr:last-child': {
      marginTop: 15
    }
  },
  divider: {
    margin: 0
  },
  content: {
    display: 'flex'
  },
  icon: {
    marginRight: 15,
    marginLeft: -15
  },
  text: {
    display: 'flex',
    alignItems: 'center'
  }
};

export const SignalNotification = compose<Props, OuterProps>(
  setDisplayName('SignalNotification'),
  injectSheet(styles)
)(SignalNotificationComp);
