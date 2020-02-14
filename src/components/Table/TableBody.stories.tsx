import { storiesOf } from '@storybook/react';
import { Typography } from '../Typography';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

storiesOf('Components|Table.TableBody', module)
  .addDecorator(
    hostDecorator({
      width: 900
    })
  )
  .add('base', () => (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>
            <Typography variant="standard">Machine Cleaning: ABC 1 of 20</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="standard">Johanna Maltese</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="standard">Finished</Typography>
          </TableCell>
          <TableCell numeric>
            <Typography variant="standard">10</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ));
