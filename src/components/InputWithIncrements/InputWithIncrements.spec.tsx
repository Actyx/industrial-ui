/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { Input } from '../Input';
import { mount, shallow } from 'enzyme';
import * as React from 'react';
import { InputWithIncrementsComp, isInputValid } from './InputWithIncrements';

jest.useFakeTimers();

describe('isInputValid', () => {
  it('should be valid if input value is >= 0', () => {
    expect(isInputValid(1)).toBeTruthy();
  });

  it('should be invalid if input value is < 0', () => {
    expect(isInputValid(-1)).toBeFalsy();
  });
});

const createComponent = (
  options: Readonly<{
    defaultValue?: number;
    onChange: (value: number) => void;
  }>
) => {
  const classes = {} as any;
  return options.defaultValue ? (
    <InputWithIncrementsComp
      classes={classes}
      defaultValue={options.defaultValue}
      incrementMin={1}
      incrementMed={5}
      incrementMax={10}
      onChange={options.onChange}
    />
  ) : (
    <InputWithIncrementsComp
      classes={classes}
      incrementMin={1}
      incrementMed={5}
      incrementMax={10}
      onChange={options.onChange}
    />
  );
};

describe('<InputWithIncrement />', () => {
  it('should handle input onBlur', () => {
    const onChange = jest.fn();
    const wrapper = mount(createComponent({ onChange }));
    const input = wrapper.find('input').first();
    input.simulate('blur');
    expect(onChange).toHaveBeenCalledWith(0);

    const wrapper2 = mount(createComponent({ defaultValue: 100, onChange }));
    const input2 = wrapper2.find('input').first();
    input2.simulate('blur');
    expect(onChange).toHaveBeenCalledWith(100);

    const wrapper3 = mount(createComponent({ defaultValue: 0, onChange }));
    const input3 = wrapper3.find('input').first();
    input3.simulate('blur');
    expect(wrapper3.state('error')).toBeFalsy(); // TODO replace asserting component state with UI instead

    const wrapper4 = mount(createComponent({ defaultValue: -1, onChange }));
    const input4 = wrapper4.find('input').first();
    input4.simulate('blur');
    expect(wrapper4.state('error')).toBeTruthy();

    const wrapper5 = mount(createComponent({ defaultValue: -1, onChange }));
    const input5 = wrapper5.find('input').first();
    wrapper5.setState({ currentValueDisplay: '' });
    input5.simulate('blur');
    expect(wrapper5.state('error')).toBeFalsy();
  });

  it('should handle state change after input onChange', () => {
    const onChange = jest.fn();
    const wrapper = shallow(createComponent({ onChange }));
    const input = wrapper.find(Input).first();
    input.simulate('change', { currentTarget: { value: 10 } });
    const state = {
      currentValue: 10,
      currentValueDisplay: 10,
      incrementValue: 0,
      incrementValueDisplay: '',
      error: false
    };
    expect(wrapper.instance().state).toMatchObject(state);

    const inputAfterChange = wrapper
      .find(Input)
      .first()
      .prop('value');
    expect(inputAfterChange).toBe(10);
  });

  it('should handle handleSelectButton', () => {
    const onChange = jest.fn();
    const wrapper = shallow(createComponent({ defaultValue: 10, onChange }));
    const instance = wrapper.instance();
    // @ts-ignore
    instance.handleSelectButton(10);
    jest.runAllTimers();
    wrapper.update();
    expect(wrapper.state()).toMatchObject({
      currentValue: 20,
      currentValueDisplay: '20',
      incrementValue: 0,
      incrementValueDisplay: '',
      error: false
    });

    const wrapper2 = shallow(createComponent({ onChange }));
    const instance2 = wrapper2.instance();
    // @ts-ignore
    instance2.handleSelectButton(0);
    jest.runAllTimers();
    wrapper2.update();
    expect(wrapper2.state()).toMatchObject({
      currentValue: 0,
      currentValueDisplay: '0',
      incrementValue: 0,
      incrementValueDisplay: '',
      error: true
    });
  });
});
