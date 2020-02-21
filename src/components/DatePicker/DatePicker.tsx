import * as React from 'react';
import RDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerInput } from './DatePickerInput';

type Props = Readonly<{
  value?: Date;
  onChange: (e: Date) => void;
}>;

export const DatePicker = ({ value, onChange }: Props) => {
  const [date, setDate] = React.useState(value === undefined ? null : value);

  const handleOnChange = (x: Date) => {
    setDate(x);
    onChange(x);
  };

  return (
    <div>
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
