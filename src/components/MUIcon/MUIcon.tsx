import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { theme } from '../../theme';

type CompProps = Readonly<{
  className?: string;
  type: string;
  fontSize?: number;
  color?: string;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const MUIconComp = ({ className, type, classes }: Props) => (
  <i className={classNames(classes.root, className)}>{type}</i>
);

type ClassKey = 'root';

const styles: StyleSheet<ClassKey, CompProps> = {
  root: ({ fontSize, color }) => ({
    fontFamily: 'Material Icons',
    fontWeight: theme.typography.fontWeightRegular,
    fontStyle: 'normal',
    fontSize: fontSize ? fontSize : 24,
    display: 'inline-block',
    lineHeight: 1,
    textTransform: 'none',
    letterSpacing: 'normal',
    wordWrap: 'normal',
    whiteSpace: 'nowrap',
    direction: 'ltr',
    textRendering: 'optimizeLegibility',
    color: color ? color : 'inherit',
    verticalAlign: 'top'
  })
};

export const MUIcon = compose<Props, CompProps>(
  setDisplayName('MUIcon'),
  injectSheet(styles)
)(MUIconComp);
