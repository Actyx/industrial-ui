import { Styles } from 'jss';

// export type StyleSheet<ClassKey extends string = string, Props = {}> =
//   | Styles
//   | ((props: Props) => Styles);

export type StyleSheet<ClassKey extends string = string, Props = {}> = Styles;

export type ClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>;

export interface WithStyles<ClassKey extends string = string> {
  classes: ClassNameMap<ClassKey>;
}
