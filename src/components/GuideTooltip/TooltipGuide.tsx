import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { Typography } from '../Typography';
import { MUIcon } from '../MUIcon';
import { WithStyles, StyleSheet } from '../../utils/jss';

type Color = 'neutral';

type CompProps = Readonly<{
  color: Color;
  content: React.ReactNode;
}>;

type ClassKey =
  | 'root'
  | 'box'
  | 'boxShadow'
  | 'arch'
  | 'archContainer'
  | 'icon'
  | 'neutral'
  | 'content';

type Props = WithStyles<ClassKey> & CompProps;

const TooltipGuideComp = ({ classes, color, content }: Props) => (
  <div className={classes.root}>
    <div className={classes.archContainer}>
      <div className={classes.arch} />
      <div className={classNames(classes.icon, classes[color])}>
        <MUIcon type="info" fontSize={80} />
      </div>
    </div>
    <div className={classes.box}>
      <div className={classes.content}>
        <Typography variant="standard">{content}</Typography>
      </div>
    </div>
    <div className={classes.boxShadow} />
  </div>
);

const styles: StyleSheet<ClassKey> = {
  root: {
    width: 350,
    minHeight: 130,
    position: 'relative'
  },
  box: {
    position: 'absolute',
    top: 0,
    left: 40,
    width: 310,
    height: '100%',
    backgroundColor: theme.palette.grey.white
  },
  boxShadow: {
    position: 'absolute',
    top: 0,
    left: 40,
    width: 310,
    height: '100%',
    boxShadow: theme.shadow.sm
  },
  archContainer: {
    position: 'absolute',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  arch: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.palette.grey.white,
    boxShadow: theme.shadow.sm
  },
  icon: {
    position: 'absolute',
    zIndex: 1
  },
  neutral: {
    color: theme.palette.grey.dark400
  },
  content: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 50
  }
};

export const TooltipGuide = compose<Props, CompProps>(
  setDisplayName('TooltipGuide'),
  injectSheet(styles)
)(TooltipGuideComp);
