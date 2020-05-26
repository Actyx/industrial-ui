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
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { TouchRipple } from '../TouchRipple';
import { MUIcon } from '../MUIcon';

export type RadioButtonColor = 'neutral' | 'primary';

type CompProps = Readonly<{
  className?: string;
  checked: boolean;
  color?: RadioButtonColor;
  disabled?: boolean;
  onChange?: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const RadioButtonComp = ({ classes, className, checked, color, disabled, onChange }: Props) => (
  <div
    className={classNames(classes.root, className)}
    style={{
      color: theme.utils.rgba(
        color === undefined || color === 'primary'
          ? theme.palette.primary.main
          : theme.palette.grey[900],
        disabled ? 0.5 : 1
      )
    }}
    onClick={onChange}
  >
    <TouchRipple>
      <MUIcon fontSize={40} type={checked ? 'radio_button_checked' : 'radio_button_unchecked'} />
    </TouchRipple>
  </div>
);

type ClassKey = 'root';

const styles: StyleSheet<ClassKey> = {
  root: {
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > div': {
      width: 'inherit',
      height: 'inherit',
      borderRadius: 20
    }
  }
};

export const RadioButton = compose<Props, CompProps>(
  setDisplayName('RadioButton'),
  injectSheet(styles)
)(RadioButtonComp);
