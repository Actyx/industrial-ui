import * as React from 'react';
import { CheckboxIndeterminate, CheckboxIndeterminateColor } from '../CheckboxIndeterminate';

type Props = Readonly<{
  checked: boolean;
  color?: CheckboxIndeterminateColor;
  disabled?: boolean;
  onChange: () => void;
}>;

export const Checkbox = ({ checked, color, disabled, onChange }: Props) => (
  <CheckboxIndeterminate
    state={checked ? 'checked' : 'unchecked'}
    color={color}
    disabled={disabled}
    onClick={onChange}
  />
);
