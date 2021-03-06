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
import * as React from 'react';
import { Tabs } from './Tabs';

storiesOf('Components/Tabs', module)
  .addParameters({ component: Tabs })
  .add('Base', () => (
    <Tabs
      tabs={[<strong key="xxx">Description</strong>, 'Documents']}
      selected={0}
      onSelect={action('onSelect')}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet ornare est. Fusce eget
      urna imperdiet, fringilla leo vel, euismod augue.
    </Tabs>
  ))
  .add('Statefull', () => {
    const style: React.CSSProperties = { height: 250 };

    const content = {
      0: <div style={style}>Some content for Description</div>,
      1: <div style={style}>Some content for Documents</div>
    };

    function Statefull() {
      const [tabOpen, setTabOpen] = React.useState<number>(0);
      return (
        <Tabs tabs={['Description', 'Documents']} selected={tabOpen} onSelect={x => setTabOpen(x)}>
          {content[tabOpen]}
        </Tabs>
      );
    }

    return <Statefull />;
  });
