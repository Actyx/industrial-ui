import * as React from 'react';
import {
  CheckboxWithIndeterminateState,
  CheckboxWithIndeterminateStateColor
} from '../CheckboxWithIndeterminateState';

type Props = Readonly<{
  checked: boolean;
  color?: CheckboxWithIndeterminateStateColor;
  disabled?: boolean;
  onChange: () => void;
}>;

export const Checkbox = ({ checked, color, disabled, onChange }: Props) => (
  <CheckboxWithIndeterminateState
    state={checked ? 'checked' : 'unchecked'}
    color={color}
    disabled={disabled}
    onClick={onChange}
  />
);
