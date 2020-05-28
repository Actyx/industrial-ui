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
import { Typography } from '../Typography';

type CompProps = Readonly<{
  name: string;
  onClose: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const TagComp = ({ classes, name, onClose }: Props) => (
  <div className={classes.root} onClick={onClose}>
    <svg viewBox="0 0 79.375 15.875">
      <path
        className={classes.shapeSeparator}
        d="M0 0v15.875h74.083l2.646-3.969 2.646-3.969-2.646-3.968L74.083 0z"
      />
      <path
        className={classes.shape}
        d="M0 0v15.875h73.554l2.646-3.969 2.646-3.969L76.2 3.97 73.554 0z"
      />
    </svg>
    <div className={classes.content}>
      <div className={classes.icon}>
        <MUIcon type="close" fontSize={40} />
      </div>
      <div className={classes.name}>
        <Typography variant="standard" bold textTransform="uppercase">
          {name}
        </Typography>
      </div>
    </div>
  </div>
);

type ClassKey = 'root' | 'shape' | 'shapeSeparator' | 'content' | 'icon' | 'name';

export const COLOR_TAG = theme.palette.grey[500];

const styles: StyleSheet<ClassKey> = {
  root: {
    position: 'relative',
    width: 300,
    height: 60
  },
  shape: {
    fill: COLOR_TAG,
    shapeRendering: 'crispEdges'
  },
  shapeSeparator: {
    fill: theme.palette.grey[900],
    shapeRendering: 'crispEdges'
  },
  content: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 280,
    height: '100%'
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: '100%',
    color: theme.palette.primary.contrastText
  },
  name: {
    display: 'flex',
    alignItems: 'center',
    width: 220,
    height: '100%',
    paddingRight: 20,
    paddingTop: 4,
    '& span': {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: theme.palette.primary.contrastText
    }
  }
};

export const Tag = compose<Props, CompProps>(setDisplayName('Tag'), injectSheet(styles))(TagComp);
