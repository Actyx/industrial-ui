import { shallow } from 'enzyme';
import * as React from 'react';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

describe('<TableBody />', () => {
  it('should render', () => {
    const wrapper = shallow(
      <TableBody>
        <TableRow>
          <TableCell>Body</TableCell>
        </TableRow>
      </TableBody>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
