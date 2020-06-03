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
import { Divider } from '../Divider';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type CompProps = Readonly<{
  className?: string;
  confirmMessage: React.ReactNode;
  disableConfirm?: boolean;
  hideDivider?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

export const FooterWithConfirmationComp = ({
  classes,
  className,
  confirmMessage,
  disableConfirm,
  hideDivider,
  onConfirm,
  onCancel
}: Props) => (
  <div className={className}>
    {!hideDivider && <Divider />}
    <div className={classes.root}>
      <Button variant="flat" color="transparent" text={'Cancel'} onClick={onCancel} />
      <Button
        disabled={disableConfirm}
        variant="raised"
        color="primary"
        text={confirmMessage}
        onClick={onConfirm}
      />
    </div>
  </div>
);

type ClassKey = 'root';

const styles: StyleSheet<ClassKey, CompProps> = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 5
  }
};

/**
 * FooterWithConfirmation provides a classical and convenient cancel/confirm UX pattern to a dialog.
 */
export const FooterWithConfirmation = compose<Props, CompProps>(
  setDisplayName('FooterWithConfirmation'),
  injectSheet(styles)
)(FooterWithConfirmationComp);
