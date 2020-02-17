import { theme } from '../../theme';
import * as React from 'react';
import injectSheet from 'react-jss';
import Transition from 'react-transition-group/Transition';
import { compose, setDisplayName } from 'recompose';
import { WithStyles, StyleSheet } from '../../utils/jss';

const ANIMATION_DURATION = 150;

const defaultStyle = {
  transition: `opacity ${ANIMATION_DURATION}ms`,
  opacity: 0
};

const transitionStyles = {
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 1
  }
};

type CompProps = Readonly<{
  open: boolean;
  onClose: () => void;
}>;

type ClassKey = 'root';

type Props = WithStyles<ClassKey> & CompProps;

const ScrimComp = ({ classes, open, onClose }: Props) => (
  <Transition in={open} timeout={ANIMATION_DURATION}>
    {state => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
        className={classes.root}
        onClick={onClose}
      />
    )}
  </Transition>
);

const styles: StyleSheet<ClassKey> = {
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: theme.utils.rgba(theme.palette.grey.black, 0.6)
  }
};

export const Scrim = compose<Props, CompProps>(
  setDisplayName('Scrim'),
  injectSheet(styles)
)(ScrimComp);
