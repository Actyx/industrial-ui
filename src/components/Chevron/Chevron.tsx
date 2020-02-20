import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { Transition } from 'react-transition-group';
import { compose, setDisplayName } from 'recompose';
import { MUIcon } from '../MUIcon';
import { mkTransitionStyles, mkDefaultStyles } from './utility';

const ANIMATION_DURATION = 140;

export type ChevronType = 'up-down' | 'right-down';

type CompProps = Readonly<{
  className?: string;
  variant?: 'standard' | 'small';
  type?: ChevronType;
  down?: boolean;
  animation?: boolean;
  onSelect?: (ev: React.MouseEvent<HTMLElement>) => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const ChevronComp = ({
  classes,
  className,
  down,
  type = 'up-down',
  animation = true,
  onSelect,
  variant = 'standard'
}: Props) => {
  const duration = animation ? ANIMATION_DURATION : 0;
  const transitionStyles = mkTransitionStyles(type);
  const defaultStyles = mkDefaultStyles(type);
  return (
    <Transition in={!!down} timeout={duration}>
      {state => (
        <div
          className={classNames(classes.root, className, classes[variant])}
          style={{
            ...defaultStyles(duration),
            ...transitionStyles[state]
          }}
          onClick={onSelect}
        >
          <MUIcon fontSize={35} type="keyboard_arrow_up" />
        </div>
      )}
    </Transition>
  );
};
type ClassKey = 'root' | 'standard' | 'small';

const styles: StyleSheet<ClassKey> = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none'
  },
  standard: {
    width: 80,
    height: 80
  },
  small: {
    width: 60,
    height: 60
  }
};

export const Chevron = compose<Props, CompProps>(
  setDisplayName('Chevron'),
  injectSheet(styles)
)(ChevronComp);
