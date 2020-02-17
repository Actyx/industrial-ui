import { theme } from '../../theme';
import * as React from 'react';
import injectSheet from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { Input } from '../Input';
import { WithStyles, StyleSheet } from '../../utils/jss';

type CompProps = {
  value?: string;
  onClick?: () => void;
};

type Props = WithStyles<ClassKey> & CompProps;

const DatePickerInputComp = (props: Props) => {
  return <Input {...props} className={props.classes.input} type="text" readOnly />;
};

type ClassKey = 'input';

const styles: StyleSheet<ClassKey> = {
  input: {
    backgroundColor: theme.palette.grey.white,
    fontSize: 28
  }
};

export const DatePickerInput = compose<Props, CompProps>(
  setDisplayName('DatePickerInput'),
  injectSheet(styles)
)(DatePickerInputComp);
