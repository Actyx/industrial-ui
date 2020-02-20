import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { PaginationDot } from './PaginationDot';
import { range } from '../../utils';

type CompProps = Readonly<{
  dots: number;
  index: number;
  onChangeIndex: (index: number) => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const PaginationDotsComp = ({ classes, dots, index, onChangeIndex }: Props) => (
  <div className={classes.root}>
    {range(0, dots).map(x => (
      <PaginationDot key={x} active={x === index} onClick={() => onChangeIndex(x)} />
    ))}
  </div>
);

type ClassKey = 'root';

const styles: StyleSheet<ClassKey> = {
  root: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    display: 'flex',
    flexDirection: 'row'
  }
};

export const PaginationDots = compose<Props, CompProps>(
  setDisplayName('PaginationDots'),
  injectSheet(styles)
)(PaginationDotsComp);
