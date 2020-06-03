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
import { MUIcon } from '../MUIcon';

type CompProps = Readonly<{
  className?: string;
  selected: boolean;
  text: React.ReactNode;
  icon?: string;
  onSelect?: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const ButtonStatusComp = ({ classes, className, selected, text, icon, onSelect }: Props) => (
  <div className={classNames(classes.root, className)}>
    <TouchRipple
      className={classNames(
        classes.button,
        classes.contour,
        icon ? classes.contentWithIcon : classes.content,
        selected ? classes.selected : classes.normal
      )}
      disabled={selected}
      onClick={selected ? undefined : onSelect}
    >
      <Typography variant="standard" textTransform="uppercase" bold>
        {text}
      </Typography>
      {icon && (
        <div className={classes.icon}>
          <MUIcon
            type={icon}
            fontSize={40}
            color={selected ? theme.palette.primary.dark : theme.palette.common.white}
          />
        </div>
      )}
    </TouchRipple>
  </div>
);

type ClassKey =
  | 'root'
  | 'normal'
  | 'selected'
  | 'contour'
  | 'content'
  | 'contentWithIcon'
  | 'icon'
  | 'button';

const styles: StyleSheet<ClassKey, CompProps> = {
  root: {
    display: 'inline-flex',
    position: 'relative'
  },
  normal: {
    backgroundColor: theme.palette.grey[600],
    '& > span': {
      color: theme.palette.primary.contrastText
    }
  },
  selected: {
    backgroundColor: theme.palette.primary.light,
    '& > span': {
      color: theme.palette.primary.dark
    }
  },
  contour: {
    boxShadow: theme.shadow.xs,
    borderRadius: 4
  },
  content: {
    paddingLeft: 34,
    paddingRight: 34
  },
  contentWithIcon: {
    paddingLeft: 34,
    paddingRight: 36
  },
  icon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 40,
    height: 40,
    marginRight: 2,
    marginBottom: 2
  },
  button: {
    display: 'flex',
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

/**
 * ButtonStatus provide the user with a way to trigger an action with a single tap, providing contextual information with iconography.
 * A possible use case is to allow a user to select a workstation informing him of the presence of an operator.
 */
export const ButtonStatus = compose<Props, CompProps>(
  setDisplayName('ButtonStatus'),
  injectSheet(styles)
)(ButtonStatusComp);
