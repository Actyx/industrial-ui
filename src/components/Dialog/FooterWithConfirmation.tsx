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

export const FooterWithConfirmation = compose<Props, CompProps>(
  setDisplayName('FooterWithConfirmation'),
  injectSheet(styles)
)(FooterWithConfirmationComp);
