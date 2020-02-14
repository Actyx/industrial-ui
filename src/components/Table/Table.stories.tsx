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

const COLOR_WHITE = theme.palette.grey.white;

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

storiesOf('common|Table.Table', module)
  .addDecorator(
    hostDecorator({
      width: 900,
      backgroundColor: theme.palette.grey.dark400
    })
  )
  .add('body', () => (
    <Table>
      <TableBody>{createRows(dataBody)}</TableBody>
    </Table>
  ))
  .add('header body', () => (
    <Table alternateColor>
      <TableHeader>{createRows(dataHeader, 'subtext')}</TableHeader>
      <TableBody>{createRows(dataBody)}</TableBody>
    </Table>
  ))
  .add('header body alternateColor dark', () => (
    <Table alternateColor dark>
      <TableHeader>{createRows(dataHeader, 'subtext', true)}</TableHeader>
      <TableBody>{createRows(dataBody, undefined, true)}</TableBody>
    </Table>
  ));
