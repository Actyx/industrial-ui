import { Keypad } from './Keypad';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { theme } from '../../theme';

const KEYPAD_HEIGHT = 460;

type OuterProps = Readonly<{
  onChange: (value: string) => void;
  onDeleteSelect: () => void;
}>;

type Props = WithStyles<ClassKey> & OuterProps;

const PortableKeypadComp = ({ classes, onChange, onDeleteSelect }: Props) => (
  <div className={classes.root}>
    <Keypad
      hideNegative
      onNumberSelect={v => onChange(String(v))}
      onDeleteSelect={onDeleteSelect}
      onMinusSelect={() => ({})}
    />
  </div>
);

type ClassKey = 'root';

const COLOR_BLACK = theme.palette.common.black;
const GRADIENT = `linear-gradient(to bottom, #e2e2e2 0%,#dbdbdb 50%,#d1d1d1 51%,#fefefe 100%)`;

const styles: StyleSheet<ClassKey, OuterProps> = {
  root: {
    padding: '10px 0 0 10px',
    width: 350,
    height: KEYPAD_HEIGHT,
    backgroundImage: GRADIENT,
    borderRadius: 50,
    border: `1px solid ${theme.palette.grey[600]}`,
    boxShadow: `3px 5px 9px ${theme.utils.rgba(COLOR_BLACK, 0.5)}`
  }
};

export const PortableKeypad = compose<Props, OuterProps>(
  setDisplayName('PortableKeypad'),
  injectSheet(styles)
)(PortableKeypadComp);
