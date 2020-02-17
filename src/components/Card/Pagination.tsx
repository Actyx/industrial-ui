import * as React from 'react';
import injectSheet from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { PaginationDot } from './PaginationDot';
import { range } from '../../utils';
import { WithStyles, StyleSheet } from '../../utils/jss';

type OuterProps = Readonly<{
  dots: number;
  index: number;
  onChangeIndex: (index: number) => void;
}>;

type Props = WithStyles<ClassKey> & OuterProps;

const PaginationComp = ({ classes, dots, index, onChangeIndex }: Props) => (
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

export const Pagination = compose<Props, OuterProps>(
  setDisplayName('Pagination'),
  injectSheet(styles)
)(PaginationComp);
