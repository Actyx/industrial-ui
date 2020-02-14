import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { Typography } from '../Typography';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableRow } from './TableRow';

const content = (
  <>
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
  </>
);

storiesOf('common|Table.TableRow', module)
  .addDecorator(
    hostDecorator({
      width: 900
    })
  )
  .add('base', () => (
    <Table>
      <TableBody>
        <TableRow>{content}</TableRow>
      </TableBody>
    </Table>
  ))
  .add('short', () => (
    <Table>
      <TableBody>
        <TableRow condensed>{content}</TableRow>
      </TableBody>
    </Table>
  ))
  .add('onSelect', () => (
    <Table>
      <TableBody>
        <TableRow onSelect={action('onSelect')}>{content}</TableRow>
      </TableBody>
    </Table>
  ));
