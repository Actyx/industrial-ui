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
import { compose, setDisplayName } from 'recompose';
import injectSheet, { WithStyles, StyleSheet } from 'react-jss';

type BaseProps = Readonly<{
  className?: string;
  color?: string;
  variant: 'subtext' | 'standard' | 'distance' | 'big' | 'heading' | 'giant';
  italic?: boolean;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  children: React.ReactNode;
  disabled?: boolean;
  noWrap?: boolean;
  ellipsis?: boolean;
}>;

type Bold = Readonly<{
  bold?: boolean;
  semiBold?: undefined;
}>;

type SemiBold = Readonly<{
  bold?: undefined;
  semiBold?: boolean;
}>;

type CompProps = BaseProps & (Bold | SemiBold);

type ClassKey =
  | 'bold'
  | 'semiBold'
  | 'italic'
  | 'noWrap'
  | 'ellipsis'
  | 'subtext'
  | 'standard'
  | 'distance'
  | 'big'
  | 'heading'
  | 'giant'
  | 'uppercase'
  | 'lowercase'
  | 'capitalize';

type Props = WithStyles<ClassKey> & CompProps;

const getColor = (color?: string, disabled?: boolean) =>
  color
    ? color === 'inherit'
      ? { color }
      : { color: theme.utils.rgba(color, disabled ? 0.5 : 1) }
    : undefined;

const TypographyComp = ({
  classes,
  color,
  className,
  children,
  variant,
  bold,
  semiBold,
  italic,
  textTransform,
  disabled,
  noWrap,
  ellipsis
}: Props) => (
  <span
    style={getColor(color, disabled)}
    className={classNames(
      className,
      classes[variant],
      textTransform ? classes[textTransform] : undefined,
      {
        [classes.bold]: bold,
        [classes.semiBold]: semiBold,
        [classes.italic]: italic,
        [classes.noWrap]: noWrap,
        [classes.ellipsis]: ellipsis
      }
    )}
  >
    {children}
  </span>
);

const DEFAULT_COLOR = theme.palette.grey[900];

const FONT_SIZE = {
  giant: 70,
  heading: 48,
  big: 36,
  distance: 28,
  standard: 20,
  small: 16
};

const styles: StyleSheet<ClassKey> = {
  bold: {
    fontWeight: theme.typography.fontWeightBold
  },
  semiBold: {
    fontWeight: theme.typography.fontWeightMedium
  },
  italic: {
    fontStyle: 'italic'
  },
  subtext: {
    color: DEFAULT_COLOR,
    fontSize: FONT_SIZE.small
  },
  standard: {
    color: DEFAULT_COLOR,
    fontSize: FONT_SIZE.standard
  },
  distance: {
    color: DEFAULT_COLOR,
    fontSize: FONT_SIZE.distance
  },
  big: {
    color: DEFAULT_COLOR,
    fontSize: FONT_SIZE.big
  },
  heading: {
    color: DEFAULT_COLOR,
    fontSize: FONT_SIZE.heading
  },
  giant: {
    color: DEFAULT_COLOR,
    fontSize: FONT_SIZE.giant
  },
  uppercase: {
    textTransform: 'uppercase'
  },
  lowercase: {
    textTransform: 'lowercase'
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  noWrap: {
    whiteSpace: 'nowrap'
  },
  ellipsis: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'block'
  }
};

export const Typography = compose<Props, CompProps>(
  setDisplayName('Typography'),
  injectSheet(styles)
)(TypographyComp);
