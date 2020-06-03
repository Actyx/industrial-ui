/* eslint-disable react/display-name */
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
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Grid } from './Grid';

storiesOf('Components/Grid', module)
  .addParameters({ component: Grid })
  .addDecorator(hostDecorator({}))
  .add('Base', () => {
    type Item = Readonly<{
      id: string;
      description: string;
      value: string;
    }>;

    const lorem = 'Lorem ipsum dolor sit amet.';

    const data: ReadonlyArray<Item> = [
      { id: 'a', description: `A ${lorem}`, value: '1' },
      { id: 'b', description: `B ${lorem}`, value: '2' },
      { id: 'c', description: `C ${lorem}`, value: '3' }
    ];

    const baseProps = {
      data,
      getUniqKey: (datum: Item) => datum.id,
      header: Object.keys(data[0]).map((x, idx) => (
        <td className="font-weight-bold" key={idx}>
          {x.toUpperCase()}
        </td>
      )),
      renderRow: ({ id, description, value }: Item) => (
        <>
          <td>{id}</td>
          <td>{description}</td>
          <td>{value}</td>
        </>
      )
    };
    return <Grid<Item> {...baseProps} />;
  })
  .add('setRowClassName', () => {
    type Item = Readonly<{
      id: string;
      description: string;
      value: string;
    }>;

    const lorem = 'Lorem ipsum dolor sit amet.';

    const data: ReadonlyArray<Item> = [
      { id: 'a', description: `A ${lorem}`, value: '1' },
      { id: 'b', description: `B ${lorem}`, value: '2' },
      { id: 'c', description: `C ${lorem}`, value: '3' }
    ];

    function Row({ id, description, value }: Item) {
      return (
        <>
          <td>{id}</td>
          <td>{description}</td>
          <td>{value}</td>
        </>
      );
    }

    const baseProps = {
      data,
      getUniqKey: (datum: Item) => datum.id,
      header: Object.keys(data[0]).map((x, idx) => (
        <td style={{ fontWeight: 'bold' }} key={idx}>
          {x.toUpperCase()}
        </td>
      )),
      renderRow: ({ id, description, value }: Item) => (
        <Row id={id} description={description} value={value} />
      )
    };

    return (
      <Grid<Item> {...baseProps} setRowClassName={x => (x.id === 'b' ? 'font-weight-bold' : '')} />
    );
  })
  .add('isRowSelected', () => {
    type Item = Readonly<{
      id: string;
      description: string;
      value: string;
    }>;

    const lorem = 'Lorem ipsum dolor sit amet.';

    const data: ReadonlyArray<Item> = [
      { id: 'a', description: `A ${lorem}`, value: '1' },
      { id: 'b', description: `B ${lorem}`, value: '2' },
      { id: 'c', description: `C ${lorem}`, value: '3' }
    ];

    function Row({ id, description, value }: Item) {
      return (
        <>
          <td>{id}</td>
          <td>{description}</td>
          <td>{value}</td>
        </>
      );
    }

    const baseProps = {
      data,
      getUniqKey: (datum: Item) => datum.id,
      header: Object.keys(data[0]).map((x, idx) => (
        <td style={{ fontWeight: 'bold' }} key={idx}>
          {x.toUpperCase()}
        </td>
      )),
      renderRow: ({ id, description, value }: Item) => (
        <Row id={id} description={description} value={value} />
      )
    };

    return <Grid<Item> {...baseProps} isRowSelected={x => x.id === 'b'} />;
  })
  .add('onRowSelect', () => {
    type Item = Readonly<{
      id: string;
      description: string;
      value: string;
    }>;

    const lorem = 'Lorem ipsum dolor sit amet.';

    const data: ReadonlyArray<Item> = [
      { id: 'a', description: `A ${lorem}`, value: '1' },
      { id: 'b', description: `B ${lorem}`, value: '2' },
      { id: 'c', description: `C ${lorem}`, value: '3' }
    ];

    function Row({ id, description, value }: Item) {
      return (
        <>
          <td>{id}</td>
          <td>{description}</td>
          <td>{value}</td>
        </>
      );
    }

    const baseProps = {
      data,
      getUniqKey: (datum: Item) => datum.id,
      header: Object.keys(data[0]).map((x, idx) => (
        <td className="font-weight-bold" key={idx}>
          {x.toUpperCase()}
        </td>
      )),
      renderRow: ({ id, description, value }: Item) => (
        <Row id={id} description={description} value={value} />
      )
    };

    return <Grid<Item> {...baseProps} onRowSelect={action('onRowSelected')} />;
  });
