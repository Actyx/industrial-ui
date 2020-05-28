/*
 * Copyright 2020 Actyx AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Typography, TypographyVariant } from '../Typography';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { action } from '@storybook/addon-actions';
import { common, grey } from '../../colors';

const COLOR_WHITE = common.white;

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
  variant: TypographyVariant,
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

const createRows = (dataRow: DataTable, variant: TypographyVariant = 'standard', dark = false) => (
  <>
    {dataRow.map((row, rIdx: number) => (
      <TableRow key={rIdx} active={rIdx === 1}>
        {row.map((cell, idx: number) => createTableCell(cell, variant, dark, idx === 3, idx))}
      </TableRow>
    ))}
  </>
);

storiesOf('Components/Table', module)
  .addDecorator(
    hostDecorator({
      width: 900,
      backgroundColor: grey[900]
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
  .add('Part TableBody base', () => (
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
  .add('Part TableCell base', () => (
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
  .add('Part TableCell numeric', () => (
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
  .add('Part TableCell cellType', () => (
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
  .add('Part TableRow base', () => (
    <Table>
      <TableBody>
        <TableRow>{content}</TableRow>
      </TableBody>
    </Table>
  ))
  .add('Part TableRow short', () => (
    <Table>
      <TableBody>
        <TableRow condensed>{content}</TableRow>
      </TableBody>
    </Table>
  ))
  .add('Part TableRow onSelect', () => (
    <Table>
      <TableBody>
        <TableRow onSelect={action('onSelect')}>{content}</TableRow>
      </TableBody>
    </Table>
  ));
