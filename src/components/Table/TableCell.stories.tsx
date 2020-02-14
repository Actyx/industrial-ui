import { storiesOf } from '@storybook/react';
import { Typography } from '../Typography';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

storiesOf('Components|Table.TableCell', module)
  .addDecorator(hostDecorator())
  .add('base', () => (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <Typography variant="standard">10</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ))
  .add('numeric', () => (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell numeric>
            <Typography variant="standard">10</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ))
  .add('cellType', () => (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell numeric cellType={'cellType'}>
            <Typography variant="standard">10</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ));
