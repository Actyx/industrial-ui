/* tslint:disable: no-this no-class no-expression-statement no-object-mutation */
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { WithStyles, StyleSheet } from '../../utils/jss';

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

type ClassKey = 'root' | 'fullWidth' | 'error';

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

const inputReset = {
  outline: 'none',
  outlineWidth: 0,
  boxShadow: 'none',
  border: 'none'
};

const styles: StyleSheet<ClassKey> = {
  root: {
    fontSize: 48,
    color: theme.palette.grey.black,
    ...inputReset,
    borderBottom: `${2}px solid ${theme.palette.grey.neutral100}`,
    '&:focus': {
      ...inputReset,
      borderBottom: `${2}px solid ${theme.palette.actionHighlight.deepSkyBlue}`
    }
  },
  fullWidth: {
    width: '100%'
  },
  error: {
    fontSize: 48,
    color: theme.palette.grey.black,
    ...inputReset,
    borderBottom: `${2}px solid ${theme.palette.signal.red}`,
    '&:focus': {
      ...inputReset,
      borderBottom: `${2}px solid ${theme.palette.signal.red}`
    }
  }
};

export const TextArea = compose<Props, CompProps>(
  setDisplayName('TextArea'),
  injectSheet(styles)
)(TextAreaComp);
