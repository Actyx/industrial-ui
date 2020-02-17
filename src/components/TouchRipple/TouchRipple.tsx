import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { WithStyles, StyleSheet } from '../../utils/jss';

const ANIMATION_DURATION = 500;

type CompProps = Readonly<{
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const TouchRippleComp = ({ classes, children, disabled, className, onClick, style }: Props) => (
  <div
    onClick={disabled ? undefined : onClick}
    className={classNames(className, {
      [classes.root]: !disabled,
      [classes.disabled]: disabled
    })}
    style={style}
  >
    {children}
  </div>
);

type ClassKey = 'root' | 'disabled';

const styles: StyleSheet<ClassKey> = {
  root: {
    position: 'relative',
    overflow: 'hidden',
    transform: 'translate3d(0, 0, 0)',
    cursor: 'pointer',
    userSelect: 'none',
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      backgroundImage: 'radial-gradient(circle, #000 10%, transparent 10.01%)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50%',
      transform: 'scale(10, 10)',
      opacity: 0,
      transition: `transform ${ANIMATION_DURATION}ms, opacity ${ANIMATION_DURATION * 1.5}ms`
    },
    '&:active:after': {
      transform: 'scale(0, 0)',
      opacity: 0.2,
      transition: '0s'
    }
  },
  disabled: {
    position: 'relative',
    overflow: 'hidden'
  }
};

export const TouchRipple = compose<Props, CompProps>(
  setDisplayName('TouchRipple'),
  injectSheet(styles)
)(TouchRippleComp);
