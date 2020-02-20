import { Button } from '../Button';
import { Typography } from '../Typography';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { Transition } from 'react-transition-group';
import { compose, setDisplayName } from 'recompose';

export enum FooterWithDoubleConfirmationMode {
  Normal = 'normal',
  Confirmation = 'confirmation'
}

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

type CompProps = Readonly<{
  valid: boolean;
  mode: FooterWithDoubleConfirmationMode;
  cancelMessage?: string;
  confirmMessage: string;
  yesMessage?: string;
  noMessage?: string;
  message: string;
  enableCancel?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  onSelectNo: () => void;
  onSelectYes: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const FooterWithDoubleConfirmationComp = ({
  classes,
  valid,
  mode,
  cancelMessage,
  confirmMessage,
  yesMessage,
  noMessage,
  message,
  enableCancel = true,
  onCancel,
  onConfirm,
  onSelectYes,
  onSelectNo
}: Props) => (
  <div className={classes.root}>
    <Transition
      in={mode === FooterWithDoubleConfirmationMode.Confirmation}
      timeout={ANIMATION_DURATION}
    >
      {state => (
        <div
          className={classes.content}
          style={{
            ...createDefaultStyle(ANIMATION_DURATION),
            ...transitionStyles[state]
          }}
        >
          <div className={classes.confirm}>
            {enableCancel ? (
              <Button
                variant="flat"
                color="transparent"
                text={cancelMessage ? cancelMessage : 'x'}
                onClick={onCancel}
              />
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
            <Button variant="raised" text={message} color="light200" onClick={onSelectNo} />
            <Button
              variant="raised"
              text={yesMessage ? yesMessage : noMessage}
              color="light200"
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

export const FooterWithDoubleConfirmation = compose<Props, CompProps>(
  setDisplayName('FooterWithDoubleConfirmation'),
  injectSheet(styles)
)(FooterWithDoubleConfirmationComp);
