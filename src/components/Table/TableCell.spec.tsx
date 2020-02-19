import { shallow } from 'enzyme';
import * as React from 'react';
import { TableCell } from './TableCell';

describe('<TableCell />', () => {
  it('should render', () => {
    const wrapper = shallow(<TableCell>Cell</TableCell>);
    expect(wrapper).toMatchSnapshot();
  });
});
