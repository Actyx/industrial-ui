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
declare module 'react-jss' {
  import * as CSS from 'csstype';
  import * as React from 'react';

  export interface CSSProperties extends CSS.Properties<number | string> {
    // composes?: string | string[]
    // Allow pseudo selectors and media queries
    [k: string]: CSS.Properties<number | string>[keyof CSS.Properties] | CSSProperties;
  }

  export type StyleSheet<ClassKey extends string = string, Props = {}> = Record<
    ClassKey,
    CSSProperties | ((props: Props) => React.CSSProperties)
  >;

  export type ClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>;

  export interface WithStyles<ClassKey extends string = string> {
    classes: ClassNameMap<ClassKey>;
  }

  export interface StyledComponentProps<ClassKey extends string = string> {
    classes?: Partial<ClassNameMap<ClassKey>>;
  }

  function injectSheet<ClassKey extends string, Props extends {} = {}>(
    style: StyleSheet<ClassKey, Props>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    options?: any
  ): <P extends {} = {}>(
    component: React.ComponentType<WithStyles<ClassKey> & P>
  ) => React.ComponentType<
    P extends WithStyles<ClassKey>
      ? StyledComponentProps<ClassKey>
      : StyledComponentProps<ClassKey> & P
  >;

  export default injectSheet;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const jss: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const JssProvider: any;
}
