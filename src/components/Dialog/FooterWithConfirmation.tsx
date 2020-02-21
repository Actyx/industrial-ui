import { Button } from '../Button';
import { Divider } from '../Divider';
import * as React from 'react';

type Props = Readonly<{
  className?: string;
  confirmMessage: React.ReactNode;
  disableConfirm?: boolean;
  hideDivider?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}>;

export const FooterWithConfirmation = ({
  className,
  confirmMessage,
  disableConfirm,
  hideDivider,
  onConfirm,
  onCancel
}: Props) => (
  <div className={className}>
    {!hideDivider && <Divider />}
    <div className="d-flex justify-content-between mt-4">
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
