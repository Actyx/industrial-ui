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

type CompProps = Readonly<{
  className?: string;
  autoFocus?: boolean;
  fullWidth?: boolean;
  maxLength?: number;
  readOnly?: boolean;
  rows?: number;
  value?: number | string;
  placeholder?: string;
  disabled?: boolean;
  blurOnEnter?: boolean;
  error?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

class TextAreaComp extends React.Component<Props, {}> {
  input: HTMLTextAreaElement | null = null;

  handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key.toLowerCase() === 'enter' && this.input) {
      this.input.blur();
    }
  };

  setInputRef = (el: HTMLTextAreaElement) => {
    this.input = el;
  };

  render(): React.ReactNode {
    const {
      className,
      autoFocus,
      fullWidth,
      maxLength,
      readOnly,
      rows,
      blurOnEnter,
      classes,
      value,
      placeholder,
      disabled,
      error,
      onFocus,
      onBlur,
      onChange
    } = this.props;

    return (
      <textarea
        className={classNames(className, classes.root, {
          [classes.fullWidth]: fullWidth,
          [classes.error]: error
        })}
        ref={this.setInputRef}
        autoFocus={autoFocus}
        maxLength={maxLength}
        readOnly={readOnly}
        rows={rows}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        onKeyDown={blurOnEnter ? this.handleKeyDown : undefined}
      />
    );
  }
}

type ClassKey = 'root' | 'fullWidth' | 'error';

const inputReset = {
  outline: 'none',
  outlineWidth: 0,
  boxShadow: 'none',
  border: 'none'
};

const styles: StyleSheet<ClassKey> = {
  root: {
    fontSize: 48,
    color: theme.palette.common.black,
    ...inputReset,
    borderBottom: `${2}px solid ${theme.palette.grey[400]}`,
    '&:focus': {
      ...inputReset,
      borderBottom: `${2}px solid ${theme.palette.primary.main}`
    }
  },
  fullWidth: {
    width: '100%'
  },
  error: {
    fontSize: 48,
    color: theme.palette.common.black,
    ...inputReset,
    borderBottom: `${2}px solid ${theme.palette.error.main}`,
    '&:focus': {
      ...inputReset,
      borderBottom: `${2}px solid ${theme.palette.error.main}`
    }
  }
};

/**
 * TextArea lets users enter and edit the text into the UI.
 * It typically used in forms and dialogs.
 */
export const TextArea = compose<Props, CompProps>(
  setDisplayName('TextArea'),
  injectSheet(styles)
)(TextAreaComp);
