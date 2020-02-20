import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type CompProps = Readonly<{}>;

type ClassKey = 'root' | '@keyframes scrolling';

type Props = WithStyles<ClassKey> & CompProps;

const RunningBarComp = ({ classes }: Props) => <div className={classes.root} />;

const styles: StyleSheet<ClassKey> = {
  root: {
    height: 6,
    animation: 'scrolling 4s linear infinite',
    backgroundImage: `
    repeating-linear-gradient(
      -45deg,
      rgb(69, 174, 255) 0 14px,
      rgb(125, 198, 255) 14px 28px
    )`,
    backgroundSize: '40px 100%'
  },
  '@keyframes scrolling': {
    '0%': {
      backgroundPosition: '0 0'
    },
    '100%': {
      backgroundPosition: '400px 0'
    }
  }
};

export const RunningBar = compose<Props, CompProps>(
  setDisplayName('RunningBar'),
  injectSheet(styles)
)(RunningBarComp);
