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
