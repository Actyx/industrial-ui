import { FaIcon } from './FaIcon';
import { theme } from '../../theme';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type OuterProps = Readonly<{}>;

type Props = WithStyles<ClassKey> & OuterProps;

const RequiredSymbolComp = ({ classes }: Props) => (
  <sup className={classes.root}>
    <FaIcon icon="asterisk" />
  </sup>
);
type ClassKey = 'root';

const styles: StyleSheet<ClassKey> = {
  root: {
    marginLeft: 2,
    color: theme.palette.signal.red,
    fontSize: 8
  }
};

export const RequiredSymbol = compose<Props, OuterProps>(
  setDisplayName('RequiredSymbol'),
  injectSheet(styles)
)(RequiredSymbolComp);
