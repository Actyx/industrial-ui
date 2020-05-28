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
import { theme } from '../../theme';

type CompProps = Readonly<{
  className?: string;
  type: string;
  fontSize?: number;
  color?: string;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const MUIconComp = ({ className, type, classes }: Props) => (
  <i className={classNames(classes.root, className)}>{type}</i>
);

type ClassKey = 'root';

const styles: StyleSheet<ClassKey, CompProps> = {
  root: ({ fontSize, color }) => ({
    fontFamily: 'Material Icons',
    fontWeight: theme.typography.fontWeightRegular,
    fontStyle: 'normal',
    fontSize: fontSize ? fontSize : 24,
    display: 'inline-block',
    lineHeight: 1,
    textTransform: 'none',
    letterSpacing: 'normal',
    wordWrap: 'normal',
    whiteSpace: 'nowrap',
    direction: 'ltr',
    textRendering: 'optimizeLegibility',
    color: color ? color : 'inherit',
    verticalAlign: 'top'
  })
};

export const MUIcon = compose<Props, CompProps>(
  setDisplayName('MUIcon'),
  injectSheet(styles)
)(MUIconComp);
