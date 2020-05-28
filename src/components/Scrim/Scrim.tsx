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
import { theme } from '../../theme';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import Transition from 'react-transition-group/Transition';
import { compose, setDisplayName } from 'recompose';

type CompProps = Readonly<{
  open: boolean;
  onClose: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

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

type ClassKey = 'root';

const styles: StyleSheet<ClassKey> = {
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: theme.utils.rgba(theme.palette.common.black, 0.6)
  }
};

export const Scrim = compose<Props, CompProps>(
  setDisplayName('Scrim'),
  injectSheet(styles)
)(ScrimComp);
