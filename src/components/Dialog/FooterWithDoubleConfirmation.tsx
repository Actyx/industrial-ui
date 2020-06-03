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
import { Typography } from '../Typography';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { Transition } from 'react-transition-group';
import { compose, setDisplayName } from 'recompose';

type CompProps = Readonly<{
  valid: boolean;
  mode: 'normal' | 'confirmation';
  cancelMessage?: React.ReactNode;
  confirmMessage: React.ReactNode;
  yesMessage: React.ReactNode;
  noMessage: React.ReactNode;
  message: React.ReactNode;
  onCancel: () => void;
  onConfirm: () => void;
  onSelectNo: () => void;
  onSelectYes: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const ANIMATION_DURATION = 150;
const MASK_HEIGHT = 85;

const createDefaultStyle = (duration: number): React.CSSProperties => ({
  transition: `transform ${duration}ms ease-in-out`
});

const transitionStyles = {
  entered: {
    transform: `translateY(-${MASK_HEIGHT}px)`
  }
};

const FooterWithDoubleConfirmationComp = ({
  classes,
  valid,
  mode,
  cancelMessage,
  confirmMessage,
  yesMessage,
  noMessage,
  message,
  onCancel,
  onConfirm,
  onSelectYes,
  onSelectNo
}: Props) => (
  <div className={classes.root}>
    <Transition in={mode === 'confirmation'} timeout={ANIMATION_DURATION}>
      {state => (
        <div
          className={classes.content}
          style={{
            ...createDefaultStyle(ANIMATION_DURATION),
            ...transitionStyles[state]
          }}
        >
          <div className={classes.confirm}>
            {cancelMessage ? (
              <Button variant="flat" color="transparent" text={cancelMessage} onClick={onCancel} />
            ) : (
              <div />
            )}
            <Button
              variant="raised"
              text={confirmMessage}
              color="primary"
              disabled={!valid}
              onClick={onConfirm}
            />
          </div>
          <div className={classes.confirmation}>
            <Typography variant="distance" bold>
              {message}
            </Typography>
            <Button variant="raised" text={noMessage} color="grey" onClick={onSelectNo} />
            <Button
              variant="raised"
              text={yesMessage ? yesMessage : noMessage}
              color="grey"
              onClick={onSelectYes}
            />
          </div>
        </div>
      )}
    </Transition>
  </div>
);

type ClassKey = 'root' | 'content' | 'confirm' | 'confirmation';

const styles: StyleSheet<ClassKey, CompProps> = {
  root: {
    height: MASK_HEIGHT,
    overflow: 'hidden'
  },
  content: {
    position: 'relative'
  },
  confirm: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  confirmation: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 5,
    alignItems: 'center',
    '& > span': {
      marginRight: 40
    },
    '& > div': {
      marginRight: 30
    }
  }
};

/**
 * FooterWithDoubleConfirmation a convenient confirmation UX pattern to a Dialog.
 * It provides a reconfirmation option to a user, use as a confirmation after a complex, sever, or irreversible operation.
 */
export const FooterWithDoubleConfirmation = compose<Props, CompProps>(
  setDisplayName('FooterWithDoubleConfirmation'),
  injectSheet(styles)
)(FooterWithDoubleConfirmationComp);
