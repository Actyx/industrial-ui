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
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

export type InputType = 'number' | 'text';

type CompProps = Readonly<{
  className?: string;
  type: InputType;
  value?: number | string;
  maxLength?: number;
  readOnly?: boolean;
  placeholder?: string;
  disabled?: boolean;
  blurOnEnter?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  autoFocus?: boolean;
  onClick?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

class InputComp extends React.Component<Props, {}> {
  input: HTMLInputElement | null = null;

  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { onKeyDown } = this.props;
    if (e.key.toLowerCase() === 'enter' && this.input) {
      this.input.blur();
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  setInputRef = (el: HTMLInputElement) => {
    this.input = el;
  };

  componentDidMount(): void {
    if (this.props.autoFocus && this.input) {
      this.input.focus();
    }
  }

  render(): React.ReactNode {
    const {
      className,
      blurOnEnter,
      classes,
      type,
      value,
      maxLength,
      readOnly,
      placeholder,
      disabled,
      error,
      fullWidth,
      onClick,
      onFocus,
      onBlur,
      onChange
    } = this.props;

    return (
      <input
        className={classNames(
          className,
          fullWidth ? classes.fullWidth : undefined,
          error ? classes.error : classes.root
        )}
        ref={this.setInputRef}
        type={type}
        value={value}
        maxLength={maxLength}
        readOnly={readOnly}
        placeholder={placeholder}
        disabled={disabled}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={blurOnEnter ? this.handleKeyDown : undefined}
      />
    );
  }
}

type ClassKey = 'root' | 'error' | 'fullWidth';

const inputReset = {
  outline: 'none',
  outlineWidth: 0,
  boxShadow: 'none',
  border: 'none',
  backgroundColor: 'transparent'
};

const { main } = theme.palette.primary;

const styles: StyleSheet<ClassKey> = {
  root: {
    fontSize: 20,
    color: theme.palette.common.black,
    ...inputReset,
    borderBottom: `${2}px solid ${theme.palette.grey[400]}`,
    '&:focus': {
      ...inputReset,
      borderBottom: `${2}px solid ${main}`
    },
    '&::placeholder': {
      color: theme.palette.grey[400]
    }
  },
  error: {
    color: theme.palette.common.black,
    ...inputReset,
    borderBottom: `${2}px solid ${theme.palette.error.main}`,
    '&:focus': {
      ...inputReset,
      borderBottom: `${2}px solid ${theme.palette.error.main}`
    }
  },
  fullWidth: {
    width: '100%'
  }
};

export const Input = compose<Props, CompProps>(
  setDisplayName('Input'),
  injectSheet(styles)
)(InputComp);
