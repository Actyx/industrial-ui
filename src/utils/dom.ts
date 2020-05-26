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
/* eslint-disable @typescript-eslint/ban-ts-ignore */
export const getScrollbarWidth = (): number => {
  //@ts-ignore
  let width = getScrollbarWidth.width;
  if (width === undefined) {
    let div = document.createElement('div');
    div.innerHTML =
      '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
    document.body.appendChild(div);
    //@ts-ignore
    div = div.firstChild;
    document.body.appendChild(div);
    //@ts-ignore
    width = getScrollbarWidth.width = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  }
  return width;
};
