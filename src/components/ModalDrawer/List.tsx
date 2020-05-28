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
import { Button } from '../Button';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

export type ListItem = Readonly<{
  id: string;
  name: React.ReactNode;
  icon?: string;
  iconComponent?: React.ReactNode;
  onClick: () => void;
}>;

type CompProps = Readonly<{
  items: ReadonlyArray<ListItem>;
  handleClose: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const ListComp = ({ classes, items, handleClose }: Props) => (
  <div className={classes.root}>
    {items.map(({ id, name, icon, onClick }, idx) => (
      <Button
        key={`${id}-${idx}`}
        variant="flat"
        color="transparent"
        icon={icon}
        text={name}
        onClick={() => {
          onClick();
          handleClose();
        }}
      />
    ))}
  </div>
);

type ClassKey = 'root';

const styles: StyleSheet<ClassKey> = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& i': {
      color: '#555555'
    }
  }
};

export const List = compose<Props, CompProps>(
  setDisplayName('List'),
  injectSheet(styles)
)(ListComp);
