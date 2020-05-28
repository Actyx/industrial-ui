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
import initStoryshots, { Stories2SnapsConverter } from '@storybook/addon-storyshots';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';

const converter = new Stories2SnapsConverter();

initStoryshots({
  configPath: '.storybook',
  framework: 'react',
  test: ({ story, context }) => {
    const snapshotFileName = converter.getSnapshotFileName(context);

    if (snapshotFileName) {
      const storyElement = story.getOriginal()();
      try {
        const tree = mount(storyElement);
        expect(toJson(tree)).toMatchSpecificSnapshot(snapshotFileName);
      } catch (error) {
        console.error(error.message);
        console.log(snapshotFileName);
        throw new Error(error.message);
      }
    }
  }
});
