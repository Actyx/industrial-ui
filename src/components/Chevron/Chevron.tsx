import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { Transition } from 'react-transition-group';
import { compose, setDisplayName } from 'recompose';
import { MUIcon } from '../MUIcon';
import { mkTransitionStyles, mkDefaultStyles } from './utility';

export type ChevronSize = 'md' | 'sm';

export type ChevronType = 'upDown' | 'rightDown';

type CompProps = Readonly<{
  className?: string;
  size?: ChevronSize;
  type?: ChevronType;
  down?: boolean;
  animation?: boolean;
  onSelect?: (ev: React.MouseEvent<HTMLElement>) => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const ANIMATION_DURATION = 140;

const ChevronComp = ({
  classes,
  className,
  down,
  type = 'upDown',
  animation = true,
  onSelect,
  size = 'md'
}: Props) => {
  const duration = animation ? ANIMATION_DURATION : 0;
  const transitionStyles = mkTransitionStyles(type);
  const defaultStyles = mkDefaultStyles(type);
  const iconFontSize = size === 'sm' ? 35 : 45;
  return (
    <Transition in={!!down} timeout={duration}>
      {state => (
        <div
          className={classNames(classes.root, className, classes[size])}
          style={{
            ...defaultStyles(duration),
            ...transitionStyles[state]
          }}
          onClick={onSelect}
        >
          <MUIcon fontSize={iconFontSize} type="keyboard_arrow_up" />
        </div>
      )}
    </Transition>
  );
};

type ClassKey = 'root' | 'md' | 'sm';

const styles: StyleSheet<ClassKey> = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none'
  },
  md: {
    width: 80,
    height: 80
  },
  sm: {
    width: 60,
    height: 60
  }
};

export const Chevron = compose<Props, CompProps>(
  setDisplayName('Chevron'),
  injectSheet(styles)
)(ChevronComp);
