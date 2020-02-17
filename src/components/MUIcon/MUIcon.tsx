import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { WithStyles, StyleSheet } from '../../utils/jss';

type CompProps = Readonly<{
  className?: string;
  type: string;
  fontSize?: number;
  color?: string;
}>;

type ClassKey = 'root';

type Props = WithStyles<ClassKey> & CompProps;

const MUIconComp = ({ className, type, classes, fontSize, color }: Props) => (
  <i
    style={{
      fontSize: fontSize ? `${fontSize}px` : `${24}px`,
      color: color ? color : 'inherit'
    }}
    className={classNames(classes.root, className)}
  >
    {type}
  </i>
);

const styles: StyleSheet<ClassKey> = {
  root: {
    fontFamily: 'Material Icons',
    fontWeight: 'normal',
    fontStyle: 'normal',
    display: 'inline-block',
    lineHeight: '1',
    textTransform: 'none',
    letterSpacing: 'normal',
    wordWrap: 'normal',
    whiteSpace: 'nowrap',
    direction: 'ltr',
    textRendering: 'optimizeLegibility',
    verticalAlign: 'top'
  }
};

export const MUIcon = compose<Props, CompProps>(
  setDisplayName('MUIcon'),
  injectSheet(styles)
)(MUIconComp);
