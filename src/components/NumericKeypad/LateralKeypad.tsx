import { Keypad } from './Keypad';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { Transition } from 'react-transition-group';
import { compose, setDisplayName } from 'recompose';
import { theme } from '../../theme';

const KEYPAD_HEIGHT = 460;
const ANIMATION_DURATION = 150;
const ANIMATION_TIMING = 'ease-in-out';

type OuterProps = Readonly<{
  open: boolean;
  onChange: (value: string) => void;
  onDeleteSelect: () => void;
}>;

type Props = WithStyles<ClassKey> & OuterProps;

const defaultStyle = {
  transition: `transform ${ANIMATION_DURATION}ms ${ANIMATION_TIMING}`,
  transform: `translateY(+${KEYPAD_HEIGHT + 50}px)`
};

const transitionStyles = {
  entering: {
    transform: `translateY(+${KEYPAD_HEIGHT}px)`
  },
  entered: {
    transform: 'none'
  }
};

const LateralKeypadComp = ({ classes, open, onChange, onDeleteSelect }: Props) => (
  <Transition in={open} timeout={ANIMATION_DURATION}>
    {state => (
      <div
        className={classes.root}
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}
      >
        <Keypad
          hideNegative
          onNumberSelect={v => onChange(String(v))}
          onDeleteSelect={onDeleteSelect}
          onMinusSelect={() => ({})}
        />
      </div>
    )}
  </Transition>
);

type ClassKey = 'root';

const COLOR_BLACK = theme.palette.common.black;
const GRADIENT = `linear-gradient(to bottom, #e2e2e2 0%,#dbdbdb 50%,#d1d1d1 51%,#fefefe 100%)`;

const styles: StyleSheet<ClassKey, OuterProps> = {
  root: {
    position: 'fixed',
    padding: '10px 0 0 10px',
    bottom: 10,
    right: 10,
    width: 350,
    height: KEYPAD_HEIGHT,
    backgroundImage: GRADIENT,
    borderRadius: 50,
    border: `1px solid ${theme.palette.grey[600]}`,
    boxShadow: `3px 5px 9px ${theme.utils.rgba(COLOR_BLACK, 0.5)}`
  }
};

export const LateralKeypad = compose<Props, OuterProps>(
  setDisplayName('LateralKeypad'),
  injectSheet(styles)
)(LateralKeypadComp);
