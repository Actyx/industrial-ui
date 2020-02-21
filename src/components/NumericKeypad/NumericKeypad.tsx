import * as React from 'react';
import { ClearableInput } from '../ClearableInput';
import { DECIMAL_IDENTIFIER, Keypad, MINUS_IDENTIFIER } from './Keypad';

type Props = Readonly<{
  className?: string;
  invalid?: boolean;
  defaultValue?: number;
  decimal?: boolean;
  hideInput?: boolean;
  hideNegative?: boolean;
  onChange: (value: number) => void;
}>;

const handleSubsequentSeparator = (separator: string) => (currentValue: string, newValue: string) =>
  currentValue.includes(separator) && newValue.includes(separator)
    ? currentValue
    : `${currentValue}${newValue}`;

const handlePrioritySeparator = (minusSeparator: string) => (
  currentValue: string,
  newValue: string
) => (!currentValue.includes(minusSeparator) ? newValue : currentValue);

export const handleOnChange = (value: string, cb: (newValue: number) => void) =>
  isNaN(Number(value)) ? () => ({}) : cb(Number(value));

export const handleDecimalEnter = handleSubsequentSeparator(DECIMAL_IDENTIFIER);
export const handleMinusEnter = handlePrioritySeparator(MINUS_IDENTIFIER);

type State = {
  value: string;
};

export class NumericKeypad extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { defaultValue } = props;
    this.state = {
      value: defaultValue === undefined ? '' : String(defaultValue)
    };
  }

  handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({
      value: e.currentTarget.value
    });

  handleNumberWithDecimalSeparatorSelect = (value: number) => {
    this.setState(
      prevState => ({
        value: handleDecimalEnter(prevState.value, String(value))
      }),
      () => handleOnChange(this.state.value, this.props.onChange)
    );
  };

  handleDecimalSelect = () =>
    this.setState(
      prevState => ({ value: handleDecimalEnter(prevState.value, DECIMAL_IDENTIFIER) }),
      () => handleOnChange(this.state.value, this.props.onChange)
    );

  handleClear = () => this.setState({ value: '' }, () => handleOnChange('0', this.props.onChange));

  handleDeleteKeypad = () =>
    this.setState(
      prevState => ({ value: prevState.value.slice(0, -1) }),
      () => handleOnChange(this.state.value, this.props.onChange)
    );

  handleMinusSelect = () =>
    this.setState(
      prevState => ({ value: handleMinusEnter(prevState.value, MINUS_IDENTIFIER) }),
      () => handleOnChange(this.state.value, this.props.onChange)
    );

  render(): React.ReactNode {
    const { className, invalid, decimal, hideInput, hideNegative } = this.props;
    const { value } = this.state;
    return (
      <div className={className}>
        {!hideInput && (
          <div className="mb-4">
            <ClearableInput
              disabledNativeKeyboard
              value={value}
              error={invalid}
              onClearRequested={this.handleClear}
            />
          </div>
        )}
        <Keypad
          onNumberSelect={this.handleNumberWithDecimalSeparatorSelect}
          onDeleteSelect={this.handleDeleteKeypad}
          onDecimalSelect={decimal ? this.handleDecimalSelect : undefined}
          onMinusSelect={this.handleMinusSelect}
          hideNegative={hideNegative}
        />
      </div>
    );
  }
}
