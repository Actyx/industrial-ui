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
import { Transition } from 'react-transition-group';
import { compose, setDisplayName } from 'recompose';
import { MUIcon } from '../MUIcon';
import { mkTransitionStyles, mkDefaultStyles } from './utility';

export type ChevronSize = 'md' | 'sm';

export type ChevronType = 'upDown' | 'rightDown';

type CompProps = Readonly<{
  className?: string;
  size?: 'md' | 'sm';
  type?: 'upDown' | 'rightDown';
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
