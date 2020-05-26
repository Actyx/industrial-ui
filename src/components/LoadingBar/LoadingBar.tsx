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
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type CompProps = Readonly<{}>;

type Props = WithStyles<ClassKey> & CompProps;

const LoadingBarComp = ({ classes }: Props) => <div className={classes.root} />;

type ClassKey = 'root' | '@keyframes scrolling';

const styles: StyleSheet<ClassKey> = {
  root: {
    height: 6,
    animation: '$scrolling 4s linear infinite',
    backgroundImage: `
    repeating-linear-gradient(
      -45deg,
      rgb(69, 174, 255) 0 14px,
      rgb(125, 198, 255) 14px 28px
    )`,
    backgroundSize: '40px 100%'
  },
  '@keyframes scrolling': {
    '0%': {
      backgroundPosition: '0 0'
    },
    '100%': {
      backgroundPosition: '400px 0'
    }
  }
};

export const LoadingBar = compose<Props, CompProps>(
  setDisplayName('LoadingBar'),
  injectSheet(styles)
)(LoadingBarComp);
