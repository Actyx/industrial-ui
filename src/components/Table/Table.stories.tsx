import { storiesOf } from '@storybook/react';
import { theme } from '../../theme';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Typography, Variant } from '../Typography';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { action } from '@storybook/addon-actions';

const COLOR_WHITE = theme.palette.grey.white;
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

const createTableCell = (
  children: React.ReactNode,
  variant: Variant,
  dark: boolean,
  numeric = false,
  idx: number
) => (
  <TableCell key={idx} numeric={numeric}>
    <Typography variant={variant} color={dark ? COLOR_WHITE : undefined}>
      {children}
    </Typography>
  </TableCell>
);

type DataTable = ReadonlyArray<ReadonlyArray<string>>;

const dataHeader: DataTable = [['Description', 'User', 'Status', 'Amount']];

const dataBody: DataTable = [
  ['Machine Cleaning: ABC 1 of 20', 'Johanna Maltese', 'Finished', '10'],
  ['Machine Cleaning: XYZ 10 of 30', 'Robert Parker', 'Finished', '10'],
  ['Machine Cleaning: QWE 5 of 5', 'Linda Berry', 'Finished', '20'],
  ['Machine Cleaning: JKL 1 of 2', 'Abram Green', 'Finished', '10'],
  ['Machine Cleaning: BNM 2 of 3', 'James Brown', 'Finished', '20'],
  ['Machine Cleaning: PQR 1 of 3', 'Tony Tesla', 'Finished', '10']
];

const createRows = (dataRow: DataTable, variant: Variant = 'standard', dark = false) => (
  <>
    {dataRow.map((row, rIdx: number) => (
      <TableRow key={rIdx} active={rIdx === 1}>
        {row.map((cell, idx: number) => createTableCell(cell, variant, dark, idx === 3, idx))}
      </TableRow>
    ))}
  </>
);

storiesOf('Components|Table.Table', module)
  .addDecorator(
    hostDecorator({
      width: 900,
      backgroundColor: theme.palette.grey.dark400
    })
  )
  .add('Body', () => (
    <Table>
      <TableBody>{createRows(dataBody)}</TableBody>
    </Table>
  ))
  .add('Header body', () => (
    <Table alternateColor>
      <TableHeader>{createRows(dataHeader, 'subtext')}</TableHeader>
      <TableBody>{createRows(dataBody)}</TableBody>
    </Table>
  ))
  .add('Header body alternateColor dark', () => (
    <Table alternateColor dark>
      <TableHeader>{createRows(dataHeader, 'subtext', true)}</TableHeader>
      <TableBody>{createRows(dataBody, undefined, true)}</TableBody>
    </Table>
  ))
  .add('Part: TableBody base', () => (
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
  ))
  .add('Part: TableCell base', () => (
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
  .add('Part: TableCell numeric', () => (
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
  .add('Part: TableCell cellType', () => (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell numeric cellType={'cellType'}>
            <Typography variant="standard">10</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ))
  .add('Part TableHeader base', () => (
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
  ))
  .add('Part: TableRow base', () => (
    <Table>
      <TableBody>
        <TableRow>{content}</TableRow>
      </TableBody>
    </Table>
  ))
  .add('Part: TableRow short', () => (
    <Table>
      <TableBody>
        <TableRow condensed>{content}</TableRow>
      </TableBody>
    </Table>
  ))
  .add('Part: TableRow onSelect', () => (
    <Table>
      <TableBody>
        <TableRow onSelect={action('onSelect')}>{content}</TableRow>
      </TableBody>
    </Table>
  ));
