import * as React from 'react';
import { CheckboxIndeterminate, CheckboxIndeterminateState } from '../CheckboxIndeterminate';

type Props = Readonly<{
  checked: boolean;
  color?: CheckboxIndeterminateState;
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
