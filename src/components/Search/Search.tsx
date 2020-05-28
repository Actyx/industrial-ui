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
import { MUIcon } from '../MUIcon';
import { theme } from '../../theme';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type CompProps = Readonly<{
  value: string;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const SearchComp = ({ classes, value, placeholder, onFocus, onBlur, onChange }: Props) => (
  <div className={classes.root}>
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
    />
    <div className={classes.icon}>
      <MUIcon type={'search'} fontSize={48} />
    </div>
  </div>
);

type ClassKey = 'root' | 'icon';

const styles: StyleSheet<ClassKey> = {
  root: {
    height: 60,
    '& input': {
      fontSize: 28,
      border: 'none',
      paddingRight: 10,
      paddingLeft: 10,
      width: '100%'
    },
    display: 'flex',
    width: '100%',
    border: `${1}px solid ${theme.palette.grey[200]}`,
    background: theme.palette.common.white
  },
  icon: {
    '& i': {
      padding: 6
    }
  }
};

export const Search = compose<Props, CompProps>(
  setDisplayName('Search'),
  injectSheet(styles)
)(SearchComp);
