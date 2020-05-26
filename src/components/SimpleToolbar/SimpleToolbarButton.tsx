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
import { Typography } from '../Typography';

type CompProps = Readonly<{
  disabled?: boolean;
  text: React.ReactNode;
  onClick?: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const SimpleToolbarButtonComp = ({ classes, text, disabled, onClick }: Props) => (
  <div className={classes.root}>
    <TouchRipple
      disabled={disabled}
      className={classNames(classes.button, { [classes.disabled]: disabled })}
      onClick={onClick}
    >
      <Typography
        variant="standard"
        color={theme.palette.common.white}
        textTransform="uppercase"
        bold
      >
        {text}
      </Typography>
    </TouchRipple>
  </div>
);

type ClassKey = 'root' | 'button' | 'disabled';

const styles: StyleSheet<ClassKey, CompProps> = {
  root: {
    height: 80
  },
  button: {
    display: 'flex',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: theme.palette.primary.main
  },
  disabled: {
    backgroundColor: theme.palette.grey[200]
  }
};

export const SimpleToolbarButton = compose<Props, CompProps>(
  setDisplayName('SimpleToolbarButton'),
  injectSheet(styles)
)(SimpleToolbarButtonComp);
