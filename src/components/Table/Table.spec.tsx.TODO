import { shallow } from 'enzyme';
import * as React from 'react';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

const render = () => (
  <>
    <TableHeader>
      <TableRow>
        <TableCell>Header</TableCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell>Body</TableCell>
      </TableRow>
    </TableBody>
  </>
);

describe('<Table />', () => {
  it('should render', () => {
    const wrapper = shallow(<Table>{render()}</Table>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render alternateColor', () => {
    const wrapper = shallow(<Table alternateColor>{render()}</Table>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render dark', () => {
    const wrapper = shallow(<Table dark>{render()}</Table>);
    expect(wrapper).toMatchSnapshot();
  });
});
