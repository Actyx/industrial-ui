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
import { Input } from '../Input';
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { MUIcon } from '../MUIcon';

type CompProps = Readonly<{
  value: string;
  disabledNativeKeyboard?: boolean;
  error?: boolean;
  long?: boolean;
  forSearch?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  onClearRequested: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const renderIcon = (hasValue: boolean, forSearch?: boolean) => {
  const color = forSearch ? theme.palette.grey[700] : undefined;
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
  disabledNativeKeyboard,
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
          disabled={!!disabledNativeKeyboard}
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
        {renderIcon(hasValue, forSearch)}
      </div>
    </div>
  );
};

type ClassKey = 'root' | 'input' | 'icon' | 'longInput' | 'searchField' | 'searchFieldBorders';

const searchBorder = `1px solid ${theme.palette.grey[700]}`;

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
    marginLeft: 8,
    width: 40,
    height: 40
  }
};

export const ClearableInput = compose<Props, CompProps>(
  setDisplayName('ClearableInput'),
  injectSheet(styles)
)(ClearableInputComp);
