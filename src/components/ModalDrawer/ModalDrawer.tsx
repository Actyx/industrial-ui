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
import { Divider } from '../Divider';
import { Scrim } from '../Scrim';
import { theme } from '../../theme';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import Transition from 'react-transition-group/Transition';
import { compose, setDisplayName } from 'recompose';
import { Header } from './Header';
import { List, ListItem } from './List';

type CompProps = Readonly<{
  open: boolean;
  headerMain: React.ReactNode;
  headerIcon?: React.ReactNode;
  listMain: ReadonlyArray<ListItem>;
  listSub: ReadonlyArray<ListItem>;
  handleClose: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const ANIMATION_DURATION = 150;
const DRAWER_WIDTH = 500;

const defaultStyle = {
  transition: `transform ${ANIMATION_DURATION}ms`,
  transform: `translateX(-${DRAWER_WIDTH}px)`
};

const transitionStyles = {
  entering: {
    transform: `translateX(-${DRAWER_WIDTH}px)`
  },
  entered: {
    transform: 'none'
  }
};

const ModalDrawerComp = ({
  classes,
  open,
  listMain,
  listSub,
  headerMain,
  headerIcon,
  handleClose
}: Props) => (
  <div
    className={classes.root}
    style={{
      pointerEvents: !open ? 'none' : 'auto'
    }}
  >
    <Scrim open={open} onClose={handleClose} />
    <Transition in={open} timeout={ANIMATION_DURATION}>
      {state => (
        <div
          className={classes.drawer}
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
        >
          <Header main={headerMain} icon={headerIcon} />
          <List items={listMain} handleClose={handleClose} />
          <div className={classes.listSub}>
            <Divider className={classes.divider} />
            <List items={listSub} handleClose={handleClose} />
          </div>
        </div>
      )}
    </Transition>
  </div>
);

type ClassKey = 'root' | 'drawer' | 'listSub' | 'divider';

const styles: StyleSheet<ClassKey> = {
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: theme.zIndex.modalDrawer
  },
  drawer: {
    position: 'absolute',
    width: DRAWER_WIDTH,
    height: '100%',
    overflow: 'auto',
    backgroundColor: theme.palette.common.white
  },
  listSub: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  divider: {
    marginBottom: 0
  }
};

export const ModalDrawer = compose<Props, CompProps>(
  setDisplayName('ModalDrawer'),
  injectSheet(styles)
)(ModalDrawerComp);
