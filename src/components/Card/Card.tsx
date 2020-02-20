import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type Size = 'md';

type Color = 'neutral' | 'red';

type CompProps = Readonly<{
  size: Size;
  color: Color;
  raised: boolean;
  header?: React.ReactNode;
  content: React.ReactNode;
  action?: React.ReactNode;
}>;

type ClassKey = 'root' | 'raised' | 'md' | 'neutral' | 'red' | 'header' | 'content' | 'action';

type Props = WithStyles<ClassKey> & CompProps;

const CardComp = ({ classes, raised, size, color, header, content, action }: Props) => (
  <div
    className={classNames(
      classes.root,
      raised ? classes.raised : undefined,
      classes[size],
      classes[color]
    )}
  >
    {header && <div className={classes.header}>{header}</div>}
    <div className={classes.content}>{content}</div>
    {action && <div className={classes.action}>{action}</div>}
  </div>
);

export const CARD_WIDTH = 510;

const styles: StyleSheet<ClassKey> = {
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  md: {
    width: CARD_WIDTH,
    height: 430
  },
  raised: {
    boxShadow: theme.shadow.sm
  },
  neutral: {
    backgroundColor: theme.palette.grey[50]
  },
  red: {
    backgroundColor: theme.palette.signal.redBright
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    width: '100%',
    minHeight: 60,
    borderBottom: `${1}px solid ${theme.palette.grey[700]}`
  },
  content: {
    overflow: 'auto',
    flexGrow: 1
  },
  action: {
    width: '100%',
    minHeight: 80
  }
};

export const Card = compose<Props, CompProps>(
  setDisplayName('Card'),
  injectSheet(styles)
)(CardComp);
