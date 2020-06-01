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
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { ButtonCircular } from '../ButtonCircular/ButtonCircular';
import { range } from '../../utils';

type CompProps = Readonly<{
  hideNegative?: boolean;
  onNumberSelect: (value: number) => void;
  onDeleteSelect: () => void;
  onMinusSelect: () => void;
  onDecimalSelect?: () => void;
}>;

const renderButtonForNumber = (value: number, cb: (value: number) => void) => (
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
