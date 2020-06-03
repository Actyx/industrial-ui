/*
 * Copyright 2020 Actyx AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type CompProps = Readonly<{
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick?: (ev: React.MouseEvent<HTMLElement>) => void;
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

const ANIMATION_DURATION = 500;

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

/**
 * TouchRipple provides an "ink ripple" interaction effect.
 * It is designed to be efficient on mobile devices using a CSS only implementation.
 */
export const TouchRipple = compose<Props, CompProps>(
  setDisplayName('TouchRipple'),
  injectSheet(styles)
)(TouchRippleComp);
