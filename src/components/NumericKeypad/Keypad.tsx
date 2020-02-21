import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { ButtonCircular } from '../ButtonCircular/ButtonCircular';
import { range } from '../../utils';

type OnNumberSelect = (value: number) => void;

type CompProps = Readonly<{
  hideNegative?: boolean;
  onNumberSelect: OnNumberSelect;
  onDeleteSelect: () => void;
  onMinusSelect: () => void;
  onDecimalSelect?: () => void;
}>;

const renderButtonForNumber = (value: number, cb: OnNumberSelect) => (
  <ButtonCircular color="neutral" key={value} value={value} onSelect={() => cb(value)} />
);

type Props = WithStyles<ClassKey> & CompProps;

const KeypadComp = ({
  classes,
  hideNegative,
  onNumberSelect,
  onDeleteSelect,
  onMinusSelect,
  onDecimalSelect
}: Props) => (
  <div className={classes.root}>
    {range(7, 10).map(value => renderButtonForNumber(value, onNumberSelect))}
    {!hideNegative ? (
      <ButtonCircular color="neutral" value="-" onSelect={onMinusSelect} />
    ) : (
      <div />
    )}
    {range(4, 7).map(value => renderButtonForNumber(value, onNumberSelect))}
    <div />
    {range(1, 4).map(value => renderButtonForNumber(value, onNumberSelect))}
    <div />
    {onDecimalSelect ? (
      <ButtonCircular color="neutral" value="." onSelect={onDecimalSelect} />
    ) : (
      <div />
    )}
    <ButtonCircular color="neutral" value="0" onSelect={() => onNumberSelect(0)} />
    <ButtonCircular
      className={classes.deleteButton}
      icon
      color="neutral"
      value="backspace"
      onSelect={onDeleteSelect}
    />
  </div>
);

type ClassKey = 'root' | 'deleteButton';

const styles: StyleSheet<ClassKey> = {
  root: {
    width: 430,
    height: 440,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    alignItems: 'center',
    justifyItems: 'center'
  },
  deleteButton: {
    '& i': {
      fontSize: 30
    }
  }
};

export const Keypad = compose<Props, CompProps>(
  setDisplayName('Keypad'),
  injectSheet(styles)
)(KeypadComp);
