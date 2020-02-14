import * as React from 'react';
import { TouchRipple } from '../../TouchRipple';
import { MUIcon } from '../../MUIcon';

type Props = Readonly<{
  type: string;
  onClick: () => void;
}>;

const styles: React.CSSProperties = {
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export function HeaderFlatButton({ type, onClick }: Props): JSX.Element {
  return (
    <TouchRipple style={styles} onClick={onClick}>
      <MUIcon type={type} fontSize={48} />
    </TouchRipple>
  );
}
