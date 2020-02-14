import { Scrim } from '../Scrim';
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type CompProps = Readonly<{
  header?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  onClose: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const FluidDialogComp = ({ classes, className, header, content, footer, onClose }: Props) => (
  <div className={classes.root}>
    <Scrim open onClose={onClose} />
    <div className={classNames(classes.container, className)}>
      <div>{header}</div>
      <div className={classes.content}>{content}</div>
      <div>{footer}</div>
    </div>
  </div>
);

type ClassKey = 'root' | 'container' | 'content';

const styles: StyleSheet<ClassKey> = {
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1100
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    margin: 24,
    maxHeight: 'calc(100% - 40px)',
    backgroundColor: theme.palette.grey.white,
    boxShadow: theme.shadow.md
  },
  content: {
    flexGrow: 1,
    overflow: 'auto',
    position: 'relative'
  }
};

export const FluidDialog = compose<Props, CompProps>(
  setDisplayName('FluidDialog'),
  injectSheet(styles)
)(FluidDialogComp);
