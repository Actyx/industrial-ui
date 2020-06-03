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
import { range } from '../../utils';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { VirtualizedList } from './VirtualizedList';
import { theme } from '../../theme';

storiesOf('Components/VirtualizedList', module)
  .addParameters({ component: VirtualizedList })
  .addDecorator(hostDecorator({ height: 400 }))
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

    const FONT_WEIGHT_BOLD = theme.typography.fontWeightBold;

    const baseProps = {
      data,
      getUniqKey: (datum: Item) => datum.id,
      header: (
        <>
          <div style={{ width: 100, fontWeight: FONT_WEIGHT_BOLD }}>Id</div>
          <div style={{ width: 300, fontWeight: FONT_WEIGHT_BOLD }}>Description</div>
          <div style={{ width: 100, marginLeft: 'auto', fontWeight: FONT_WEIGHT_BOLD }}>Value</div>
        </>
      ),
      renderRow: ({ id, description, value }: Item) => (
        <>
          <div style={{ width: 100 }}>{id}</div>
          <div style={{ width: 300 }}>{description}</div>
          <div style={{ width: 100, marginLeft: 'auto' }}>{value}</div>
        </>
      )
    };

    return <VirtualizedList<Item> {...baseProps} />;
  })
  .add('Lots of data virtualized', () => {
    type Item = Readonly<{
      id: string;
      description: string;
      value: string;
    }>;

    const FONT_WEIGHT_BOLD = theme.typography.fontWeightBold;

    const baseProps = {
      data: range(0, 10000).map(x => ({
        id: `${x}`,
        description: `Description ${x}`,
        value: `${x}`
      })),
      getUniqKey: (datum: Item) => datum.id,
      header: (
        <>
          <div style={{ width: 100, fontWeight: FONT_WEIGHT_BOLD }}>Id</div>
          <div style={{ width: 300, fontWeight: FONT_WEIGHT_BOLD }}>Description</div>
          <div style={{ width: 100, marginLeft: 'auto', fontWeight: FONT_WEIGHT_BOLD }}>Value</div>
        </>
      ),
      renderRow: ({ id, description, value }: Item) => (
        <>
          <div style={{ width: 100 }}>{id}</div>
          <div style={{ width: 300 }}>{description}</div>
          <div style={{ width: 100, marginLeft: 'auto' }}>{value}</div>
        </>
      )
    };

    return <VirtualizedList<Item> {...baseProps} />;
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

    const FONT_WEIGHT_BOLD = theme.typography.fontWeightBold;

    const baseProps = {
      data,
      getUniqKey: (datum: Item) => datum.id,
      header: (
        <>
          <div style={{ width: 100, fontWeight: FONT_WEIGHT_BOLD }}>Id</div>
          <div style={{ width: 300, fontWeight: FONT_WEIGHT_BOLD }}>Description</div>
          <div style={{ width: 100, marginLeft: 'auto', fontWeight: FONT_WEIGHT_BOLD }}>Value</div>
        </>
      ),
      renderRow: ({ id, description, value }: Item) => (
        <>
          <div style={{ width: 100 }}>{id}</div>
          <div style={{ width: 300 }}>{description}</div>
          <div style={{ width: 100, marginLeft: 'auto' }}>{value}</div>
        </>
      )
    };
    return (
      <VirtualizedList<Item>
        {...baseProps}
        setRowClassName={x => (x.id === 'b' ? 'font-weight-bold' : '')}
      />
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

    const FONT_WEIGHT_BOLD = theme.typography.fontWeightBold;

    const baseProps = {
      data,
      getUniqKey: (datum: Item) => datum.id,
      header: (
        <>
          <div style={{ width: 100, fontWeight: FONT_WEIGHT_BOLD }}>Id</div>
          <div style={{ width: 300, fontWeight: FONT_WEIGHT_BOLD }}>Description</div>
          <div style={{ width: 100, marginLeft: 'auto', fontWeight: FONT_WEIGHT_BOLD }}>Value</div>
        </>
      ),
      renderRow: ({ id, description, value }: Item) => (
        <>
          <div style={{ width: 100 }}>{id}</div>
          <div style={{ width: 300 }}>{description}</div>
          <div style={{ width: 100, marginLeft: 'auto' }}>{value}</div>
        </>
      )
    };
    return <VirtualizedList<Item> {...baseProps} isRowSelected={x => x.id === 'b'} />;
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

    const FONT_WEIGHT_BOLD = theme.typography.fontWeightBold;

    const baseProps = {
      data,
      getUniqKey: (datum: Item) => datum.id,
      header: (
        <>
          <div style={{ width: 100, fontWeight: FONT_WEIGHT_BOLD }}>Id</div>
          <div style={{ width: 300, fontWeight: FONT_WEIGHT_BOLD }}>Description</div>
          <div style={{ width: 100, marginLeft: 'auto', fontWeight: FONT_WEIGHT_BOLD }}>Value</div>
        </>
      ),
      renderRow: ({ id, description, value }: Item) => (
        <>
          <div style={{ width: 100 }}>{id}</div>
          <div style={{ width: 300 }}>{description}</div>
          <div style={{ width: 100, marginLeft: 'auto' }}>{value}</div>
        </>
      )
    };
    return <VirtualizedList<Item> {...baseProps} onRowSelect={action('onRowSelected')} />;
  });
