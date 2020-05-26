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
import { Keypad } from './Keypad';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { theme } from '../../theme';

const KEYPAD_HEIGHT = 460;

type OuterProps = Readonly<{
  onChange: (value: string) => void;
  onDeleteSelect: () => void;
}>;

type Props = WithStyles<ClassKey> & OuterProps;

const PortableKeypadComp = ({ classes, onChange, onDeleteSelect }: Props) => (
  <div className={classes.root}>
    <Keypad
      hideNegative
      onNumberSelect={v => onChange(String(v))}
      onDeleteSelect={onDeleteSelect}
      onMinusSelect={() => ({})}
    />
  </div>
);

type ClassKey = 'root';

const COLOR_BLACK = theme.palette.common.black;
const GRADIENT = `linear-gradient(to bottom, #e2e2e2 0%,#dbdbdb 50%,#d1d1d1 51%,#fefefe 100%)`;

const styles: StyleSheet<ClassKey, OuterProps> = {
  root: {
    padding: '10px 0 0 10px',
    width: 350,
    height: KEYPAD_HEIGHT,
    backgroundImage: GRADIENT,
    borderRadius: 50,
    border: `1px solid ${theme.palette.grey[600]}`,
    boxShadow: `3px 5px 9px ${theme.utils.rgba(COLOR_BLACK, 0.5)}`
  }
};

export const PortableKeypad = compose<Props, OuterProps>(
  setDisplayName('PortableKeypad'),
  injectSheet(styles)
)(PortableKeypadComp);
