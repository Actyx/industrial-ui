import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import RDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerInput } from './DatePickerInput';

type CompProps = Readonly<{
  value?: Date;
  onChange: (e: Date) => void;
}>;

type ClassKey = 'root';

type Props = WithStyles<ClassKey> & CompProps;

const DatePickerComp = ({ classes, value, onChange }: Props) => {
  const [date, setDate] = React.useState(value === undefined ? null : value);

  const handleOnChange = (x: Date) => {
    setDate(x);
    onChange(x);
  };

  return (
    <div className={classes.root}>
      <RDatePicker
        selected={date}
        onChange={handleOnChange}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        withPortal
        dateFormat="P"
        customInput={<DatePickerInput />}
      />
    </div>
  );
};

const styles: StyleSheet<ClassKey> = {
  root: {}
};

export const DatePicker = compose<Props, CompProps>(
  setDisplayName('DatePicker'),
  injectSheet(styles)
)(DatePickerComp);
