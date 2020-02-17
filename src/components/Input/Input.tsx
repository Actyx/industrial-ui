/* tslint:disable: no-this no-class no-expression-statement no-object-mutation */

import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { WithStyles, StyleSheet } from '../../utils/jss';

type CompProps = Readonly<{
  className?: string;
  type: 'number' | 'text';
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

type ClassKey = 'root' | 'error' | 'fullWidth';

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

const inputReset = {
  outline: 'none',
  outlineWidth: 0,
  boxShadow: 'none',
  border: 'none',
  backgroundColor: 'transparent'
};

const { red } = theme.palette.signal;
const { black, neutral100, mediumGrey } = theme.palette.grey;
const { deepSkyBlue } = theme.palette.actionHighlight;

const styles: StyleSheet<ClassKey> = {
  root: {
    fontSize: 20,
    color: theme.palette.grey.black,
    ...inputReset,
    borderBottom: `${2}px solid ${neutral100}`,
    '&:focus': {
      ...inputReset,
      borderBottom: `${2}px solid ${deepSkyBlue}`
    },
    '&::placeholder': {
      color: mediumGrey
    }
  },
  error: {
    color: black,
    ...inputReset,
    borderBottom: `${2}px solid ${red}`,
    '&:focus': {
      ...inputReset,
      borderBottom: `${2}px solid ${red}`
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
