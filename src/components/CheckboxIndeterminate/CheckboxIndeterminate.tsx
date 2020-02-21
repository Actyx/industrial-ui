import { theme } from '../../theme';
import * as React from 'react';
import { MUIcon } from '../MUIcon';
import { TouchRipple } from '../TouchRipple';

export type CheckboxIndeterminateColor = 'neutral' | 'primary';

export type CheckboxIndeterminateState = 'indeterminate' | 'checked' | 'unchecked';

type Props = Readonly<{
  state: CheckboxIndeterminateState;
  color?: CheckboxIndeterminateColor;
  disabled?: boolean;
  onClick?: () => void;
}>;

export const CheckboxIndeterminate = ({ state, color, disabled, onClick }: Props) => {
  const iconType =
    state === 'checked'
      ? 'check_box'
      : state === 'unchecked'
      ? 'check_box_outline_blank'
      : 'indeterminate_check_box';

  return (
    <div
      style={{
        color: theme.utils.rgba(
          color === 'neutral' ? theme.palette.grey[900] : theme.palette.primary.main,
          disabled ? 0.5 : 1
        )
      }}
      onClick={onClick}
    >
      <TouchRipple>
        <MUIcon fontSize={40} type={iconType} />
      </TouchRipple>
    </div>
  );
};
