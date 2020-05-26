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
import { FluidDialog } from './FluidDialog';
import { theme } from '../../theme';

export type DialogSize = 'xs' | 'sm' | 'md' | 'xl' | 'xlw' | 'xxl';

type CompProps = Readonly<{
  size: DialogSize;
  header?: React.ReactNode;
  content: React.ReactNode;
  footer: React.ReactNode;
  className?: string;
  onClose: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const DialogComp = ({ classes, className, header, content, footer, onClose, size }: Props) => (
  <FluidDialog
    header={header && <div className={classes.header}>{header}</div>}
    content={content}
    footer={<div className={classes.footer}>{footer}</div>}
    className={classNames(classes.dialog, classes[size], className)}
    onClose={onClose}
  />
);

type ClassKey = 'dialog' | DialogSize | 'header' | 'footer';

const styles: StyleSheet<ClassKey> = {
  dialog: {
    padding: 24,
    zIndex: theme.zIndex.dialog
  },
  header: {
    marginBottom: 24
  },
  footer: {
    marginTop: 24
  },
  xs: {
    width: 500,
    height: 250
  },
  sm: {
    width: 650,
    height: 380
  },
  md: {
    width: 940,
    height: 520
  },
  xl: {
    width: 940,
    height: 820
  },
  xlw: {
    margin: '20px 200px',
    height: 'calc(100% - 40px)',
    width: '100%'
  },
  xxl: {
    width: 1360,
    height: 820
  }
};

export const Dialog = compose<Props, CompProps>(
  setDisplayName('Dialog'),
  injectSheet(styles)
)(DialogComp);
