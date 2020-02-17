import { theme } from '../../theme';
import * as React from 'react';
import injectSheet from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { WithStyles, StyleSheet } from '../../utils/jss';

type CompProps = Readonly<{
  className?: string;
  label: React.ReactNode;
  value: React.ReactNode;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const LabelWithValueComp = ({ classes, className, label, value }: Props) => (
  <div className={className}>
    <div className={classes.label}>{label}</div>
    <div className={classes.value}>{value}</div>
  </div>
);

type ClassKey = 'label' | 'value';

const styles: StyleSheet<ClassKey> = {
  label: {
    textTransform: 'uppercase',
    color: theme.palette.grey.dark200,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 1
  },
  value: {
    fontSize: 30,
    lineHeight: 1
  }
};

export const LabelWithValue = compose<Props, CompProps>(
  setDisplayName('LabelWithValue'),
  injectSheet(styles)
)(LabelWithValueComp);
