import { Input } from '../Input';
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { MUIcon } from '../MUIcon';

type CompProps = Readonly<{
  value: string;
  disableNativeKeyboard?: boolean;
  error?: boolean;
  long?: boolean;
  forSearch?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  onClearRequested: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>;

type ClassKey = 'root' | 'input' | 'icon' | 'longInput' | 'searchField' | 'searchFieldBorders';

type Props = WithStyles<ClassKey> & CompProps;

const icon = (hasValue: boolean, forSearch?: boolean) => {
  const color = forSearch ? theme.palette.grey.dark200 : undefined;
  if (hasValue) {
    return <MUIcon fontSize={40} type="close" color={color} />;
  } else if (forSearch) {
    return <MUIcon fontSize={40} type="search" color={color} />;
  } else {
    return null;
  }
};

const ClearableInputComp = ({
  classes,
  disableNativeKeyboard,
  value,
  long,
  forSearch,
  error,
  placeholder,
  autoFocus,
  onChange,
  onClearRequested
}: Props) => {
  const hasValue = !!value;
  return (
    <div className={classNames(classes.root, forSearch && classes.searchFieldBorders)}>
      <div className={classes.input}>
        <Input
          onChange={onChange}
          className={classNames(
            classes.input,
            long && classes.longInput,
            forSearch && classes.searchField
          )}
          disabled={!!disableNativeKeyboard}
          fullWidth
          error={error}
          type="text"
          value={value}
          placeholder={forSearch ? placeholder : undefined}
          blurOnEnter
          autoFocus={autoFocus}
        />
      </div>
      <div className={classes.icon} onClick={onClearRequested}>
        {icon(hasValue, forSearch)}
      </div>
    </div>
  );
};

const searchBorder = `1px solid ${theme.palette.grey.dark200}`;

const styles: StyleSheet<ClassKey> = {
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    backgroundColor: theme.palette.common.white,
    fontSize: 28
  },
  longInput: {
    width: 400
  },
  searchField: {
    borderBottom: 'none',
    marginLeft: 10,
    '&:focus': {
      borderBottom: 'none'
    }
  },
  searchFieldBorders: {
    border: searchBorder,
    borderRadius: 8,
    padding: 3
  },
  icon: {
    width: 40,
    height: 40
  }
};

export const ClearableInput = compose<Props, CompProps>(
  setDisplayName('ClearableInput'),
  injectSheet(styles)
)(ClearableInputComp);
