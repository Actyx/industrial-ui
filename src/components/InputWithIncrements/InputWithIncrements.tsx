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
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { ButtonCircular } from '../ButtonCircular';

type CompProps = Readonly<{
  className?: string;
  defaultValue?: number;
  incrementMin: number;
  incrementMed: number;
  incrementMax: number;
  calculationDelay?: number;
  onChange: (value: number) => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

type State = Readonly<{
  currentValue: number;
  currentValueDisplay: string;
  incrementValue: number;
  incrementValueDisplay: string;
  error: boolean;
}>;

const CALCULATION_DELAY_DEFAULT = 2000;

export const isInputValid = (value: number) => value >= 0;

export class InputWithIncrementsComp extends React.Component<Props, State> {
  timer: number;

  constructor(props: Props) {
    super(props);
    this.timer = 0;
    const { defaultValue } = this.props;
    this.state = {
      currentValueDisplay: defaultValue === undefined ? '' : String(defaultValue),
      currentValue: defaultValue === undefined ? 0 : defaultValue,
      incrementValue: 0,
      incrementValueDisplay: '',
      error: false
    };
  }

  passCurrentValue = () => {
    const { currentValue } = this.state;
    if (isInputValid(currentValue)) {
      this.props.onChange(currentValue);
    }
  };

  handleBlur = () => {
    const { currentValue, currentValueDisplay } = this.state;
    if (isInputValid(currentValue)) {
      this.passCurrentValue();
    } else if (currentValueDisplay.length === 0) {
      this.setState(() => {
        return {
          error: false
        };
      });
    } else {
      this.setState(() => {
        return {
          error: true
        };
      });
    }
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    this.setState(() => {
      return {
        currentValue: Number(value),
        currentValueDisplay: value,
        incrementValue: 0,
        incrementValueDisplay: '',
        error: false
      };
    });
  };

  performCalculation = () => {
    const { calculationDelay } = this.props;
    window.clearTimeout(this.timer);
    this.timer = window.setTimeout(
      () => {
        this.setState(prevState => {
          window.clearTimeout(this.timer);
          const currentValue = prevState.currentValue + prevState.incrementValue;
          if (currentValue > 0) {
            this.props.onChange(Number(currentValue));
            return {
              currentValue,
              currentValueDisplay: String(currentValue),
              incrementValue: 0,
              incrementValueDisplay: '',
              error: false
            };
          } else {
            return {
              currentValue,
              currentValueDisplay: String(currentValue),
              incrementValue: 0,
              incrementValueDisplay: '',
              error: true
            };
          }
        });
      },
      calculationDelay === undefined ? CALCULATION_DELAY_DEFAULT : calculationDelay
    );
  };

  handleSelectButton = (increment: number) => {
    this.setState(prevState => {
      this.performCalculation();
      return {
        currentValueDisplay: String(prevState.currentValue),
        currentValue: prevState.currentValue,
        incrementValue: prevState.incrementValue + increment,
        incrementValueDisplay: `+ ${String(prevState.incrementValue + increment)}`,
        error: false
      };
    });
  };

  render(): React.ReactNode {
    const { className, classes, incrementMin, incrementMed, incrementMax } = this.props;
    const { currentValueDisplay, incrementValueDisplay, error } = this.state;
    return (
      <div className={classNames(className, classes.root)}>
        <div className={classes.inputs}>
          <div>
            <Input
              className={classes.input}
              error={error}
              type="number"
              value={currentValueDisplay}
              blurOnEnter
              fullWidth
              onBlur={this.handleBlur}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <Input
              className={classes.input}
              type="text"
              readOnly
              fullWidth
              value={incrementValueDisplay}
            />
          </div>
        </div>
        <div className={classes.buttons}>
          <ButtonCircular
            className={classes.button}
            color="neutral"
            value={`+${incrementMin}`}
            onSelect={() => this.handleSelectButton(incrementMin)}
          />
          <ButtonCircular
            className={classes.button}
            color="neutral"
            value={`+${incrementMed}`}
            onSelect={() => this.handleSelectButton(incrementMed)}
          />
          <ButtonCircular
            className={classes.button}
            color="neutral"
            value={`+${incrementMax}`}
            onSelect={() => this.handleSelectButton(incrementMax)}
          />
        </div>
      </div>
    );
  }
}

type ClassKey = 'root' | 'inputs' | 'buttons' | 'button' | 'input';

const styles: StyleSheet<ClassKey> = {
  root: {},
  inputs: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 30,
    '& > div': {
      width: '30%'
    }
  },
  buttons: {
    display: 'flex',
    padding: 30,
    justifyContent: 'space-between'
  },
  button: {
    '& span': {
      fontSize: 28
    }
  },
  input: {
    fontSize: 48
  }
};

export const InputWithIncrements = compose<Props, CompProps>(
  setDisplayName('InputWithIncrement'),
  injectSheet(styles)
)(InputWithIncrementsComp);
