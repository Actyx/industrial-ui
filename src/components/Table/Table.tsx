import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { WithStyles, StyleSheet } from '../../utils/jss';

type CompProps = Readonly<{
  className?: string;
  children: React.ReactNode;
  alternateColor?: boolean;
  dark?: boolean;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const TableComp = ({ className, classes, children, alternateColor, dark }: Props) => (
  <table
    className={classNames(
      {
        [classes.tableDark]: dark,
        [classes.tableLight]: !dark,
        [classes.rowBorderDark]: dark,
        [classes.rowBorder]: !dark,
        [classes.alternateColorDark]: dark && alternateColor,
        [classes.alternateColor]: !dark && alternateColor
      },
      className
    )}
  >
    {children}
  </table>
);

type ClassKey =
  | 'tableLight'
  | 'tableDark'
  | 'alternateColor'
  | 'alternateColorDark'
  | 'rowBorder'
  | 'rowBorderDark';

const styles: StyleSheet<ClassKey> = {
  tableLight: {
    width: '100%',
    borderCollapse: 'collapse',
    border: 'none',
    backgroundColor: theme.palette.grey.white
  },
  tableDark: {
    width: '100%',
    borderCollapse: 'collapse',
    border: 'none',
    backgroundColor: theme.palette.grey.dark400
  },
  alternateColor: {
    '& tbody > tr:nth-of-type(odd)': {
      backgroundColor: theme.palette.grey.light100
    }
  },
  alternateColorDark: {
    '& tbody > tr:nth-of-type(odd)': {
      backgroundColor: theme.palette.grey.dark200
    }
  },
  rowBorder: {
    '& thead > tr': {
      borderBottom: `${1}px solid ${theme.palette.grey.neutral100}`
    },
    '& tbody > tr': {
      borderBottom: `${1}px solid ${theme.palette.grey.neutral100}`
    }
  },
  rowBorderDark: {
    '& thead > tr': {
      borderBottom: `${1}px solid ${theme.palette.grey.neutral100}`
    },
    '& tbody > tr': {
      borderBottom: `${1}px solid ${theme.palette.grey.dark400}`
    }
  }
};

export const Table = compose<Props, CompProps>(
  setDisplayName('Table'),
  injectSheet(styles)
)(TableComp);
