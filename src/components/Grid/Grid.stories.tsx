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
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator, LoremIpsumVeryShort } from '../../utils';
import * as React from 'react';
import { Grid } from './Grid';

type Item = Readonly<{
  id: string;
  description: string;
  value: string;
}>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: ReadonlyArray<any> = [
  { id: 'a', description: `A ${LoremIpsumVeryShort}`, value: '1' },
  { id: 'b', description: `B ${LoremIpsumVeryShort}`, value: '2' },
  { id: 'c', description: `C ${LoremIpsumVeryShort}`, value: '3' }
];

const baseProps = {
  data,
  getUniqKey: (datum: Item) => datum.id,
  header: Object.keys(data[0]).map((x, idx) => (
    <td className="font-weight-bold" key={idx}>
      {x.toUpperCase()}
    </td>
  )),
  // eslint-disable-next-line react/display-name
  renderRow: ({ id, description, value }: Item) => (
    <>
      <td>{id}</td>
      <td>{description}</td>
      <td>{value}</td>
    </>
  )
};

storiesOf('Components/Grid', module)
  .addDecorator(hostDecorator({}))
  .add('Base', () => <Grid<Item> {...baseProps} />)
  .add('setRowClassName', () => (
    <Grid<Item> {...baseProps} setRowClassName={x => (x.id === 'b' ? 'font-weight-bold' : '')} />
  ))
  .add('isRowSelected', () => <Grid<Item> {...baseProps} isRowSelected={x => x.id === 'b'} />)
  .add('onRowSelect', () => <Grid<Item> {...baseProps} onRowSelect={action('onRowSelected')} />);
