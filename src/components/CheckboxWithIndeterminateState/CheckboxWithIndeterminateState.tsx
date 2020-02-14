import { theme } from '../../theme';
import * as React from 'react';
import { MUIcon } from '../MUIcon';
import { TouchRipple } from '../TouchRipple';

export type CheckboxWithIndeterminateStateColor = 'neutral' | 'primary';
export type CheckboxWithIndeterminateState = 'indeterminate' | 'checked' | 'unchecked';

type Props = Readonly<{
  state: CheckboxWithIndeterminateState;
  color?: CheckboxWithIndeterminateStateColor;
  disabled?: boolean;
  onClick?: () => void;
}>;

export const CheckboxWithIndeterminateState = ({ state, color, disabled, onClick }: Props) => {
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
          color === 'neutral'
            ? theme.palette.grey.dark400
            : theme.palette.actionHighlight.deepSkyBlue,
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
