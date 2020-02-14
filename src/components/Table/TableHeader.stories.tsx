import { storiesOf } from '@storybook/react';
import { Typography } from '../Typography';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Table } from './Table';
import { TableCell } from './TableCell';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

storiesOf('common|Table.TableHeader', module)
  .addDecorator(
    hostDecorator({
      width: 900
    })
  )
  .add('base', () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>
            <Typography variant="subtext">Description</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtext">User</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtext">Status</Typography>
          </TableCell>
          <TableCell numeric>
            <Typography variant="subtext">Amount</Typography>
          </TableCell>
        </TableRow>
      </TableHeader>
    </Table>
  ));
