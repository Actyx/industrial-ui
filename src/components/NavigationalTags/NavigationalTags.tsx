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
import { COLOR_TAG, Tag as NavigationalTagsTag } from './Tag';

type CompProps = Readonly<{
  tags: ReadonlyArray<{
    id: string;
    name: string;
    onClose?: () => void;
  }>;
  onTagClose?: (tagId: string) => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const NavigationalTagsComp = ({ classes, tags, onTagClose }: Props) => (
  <div className={classes.root}>
    <div className={classes.bar} />
    <div className={classes.content}>
      {tags.map(({ id, name, onClose }, idx) => (
        <div style={{ zIndex: tags.length - idx }} key={`${idx}-${id}`}>
          <NavigationalTagsTag
            name={name}
            onClose={() => {
              if (onTagClose) {
                onTagClose(id);
              }

              if (onClose) {
                onClose();
              }
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

type ClassKey = 'root' | 'content' | 'bar';

const styles: StyleSheet<ClassKey, CompProps> = {
  root: {
    position: 'relative'
  },
  content: {
    display: 'flex',
    '& > div': {
      marginLeft: -5,
      backgroundColor: COLOR_TAG
    },
    '& > div:last-child': {
      backgroundColor: 'transparent'
    }
  },
  bar: {
    position: 'absolute',
    height: '100%',
    backgroundColor: COLOR_TAG
  }
};

export const NavigationalTags = compose<Props, CompProps>(
  setDisplayName('NavigationalTags'),
  injectSheet(styles)
)(NavigationalTagsComp);
