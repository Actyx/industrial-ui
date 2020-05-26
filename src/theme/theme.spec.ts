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
import { theme } from './theme';

describe('theme utils', () => {
  it('rgba should fail when color is wrong', () => {
    expect(() => theme.utils.rgba('#fff', 0)).toThrow();
  });

  it('rgba should get color function with opacity', () => {
    expect(theme.utils.rgba('#ffffff', 0.5)).toEqual('rgba(255, 255, 255, 0.5)');
  });
});
