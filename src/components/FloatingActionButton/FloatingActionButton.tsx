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
import { MUIcon } from '../MUIcon';
import { TouchRipple } from '../TouchRipple/TouchRipple';

type CompProps = Readonly<{
  className?: string;
  size: 'sm' | 'md' | 'xl';
  color: 'primary' | 'secondary' | 'neutral';
  icon: string;
  disabled?: boolean;
  onClick: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const SIZE_MD = 120;
const SIZE_XL = 150;
const SIZE_SM = 80;

const ICON_SIZES = {
  xl: 80,
  md: 50,
  sm: 40
};

const renderIcon = (icon: string, fontSize: number) => <MUIcon type={icon} fontSize={fontSize} />;

const FloatingActionButtonComp = ({
  classes,
  icon,
  size,
  color,
  onClick,
  className,
  disabled
}: Props) => (
  <div
    className={classNames(
      classes[size],
      className,
      classes[color],
      disabled ? classes.disabled : ''
    )}
    onClick={disabled ? undefined : onClick}
  >
    {disabled ? (
      <div>{renderIcon(icon, ICON_SIZES[size])}</div>
    ) : (
      <TouchRipple>{renderIcon(icon, ICON_SIZES[size])}</TouchRipple>
    )}
  </div>
);

type ClassKey = 'xl' | 'md' | 'sm' | 'primary' | 'secondary' | 'neutral' | 'disabled';

const styles: StyleSheet<ClassKey> = {
  neutral: {
    backgroundColor: theme.palette.grey[600]
  },
  primary: {
    backgroundColor: theme.palette.primary.main
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main
  },
  md: {
    width: SIZE_MD,
    height: SIZE_MD,
    borderRadius: SIZE_MD / 2,
    boxShadow: theme.shadow.sm,
    '& i': {
      color: theme.palette.primary.contrastText
    },
    '& div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: SIZE_MD,
      height: SIZE_MD,
      borderRadius: SIZE_MD / 2
    }
  },
  xl: {
    width: SIZE_XL,
    height: SIZE_XL,
    borderRadius: SIZE_XL / 2,
    boxShadow: theme.shadow.sm,
    '& i': {
      color: theme.palette.primary.contrastText
    },
    '& div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: SIZE_XL,
      height: SIZE_XL,
      borderRadius: SIZE_XL / 2
    }
  },
  sm: {
    width: SIZE_SM,
    height: SIZE_SM,
    borderRadius: SIZE_SM / 2,
    boxShadow: theme.shadow.sm,
    '& i': {
      color: theme.palette.primary.contrastText
    },
    '& div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: SIZE_SM,
      height: SIZE_SM,
      borderRadius: SIZE_SM / 2
    }
  },
  disabled: {
    filter: `brightness(${200}%) grayscale(${1})`
  }
};

export const FloatingActionButton = compose<Props, CompProps>(
  setDisplayName('FloatingActionButton'),
  injectSheet(styles)
)(FloatingActionButtonComp);
