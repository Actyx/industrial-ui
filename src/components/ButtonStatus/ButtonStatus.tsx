import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { TouchRipple } from '../TouchRipple';
import { Typography } from '../Typography';
import { MUIcon } from '../MUIcon';

type CompProps = Readonly<{
  domId?: string;
  className?: string;
  selected: boolean;
  text: React.ReactNode;
  icon?: string;
  onSelect?: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const ButtonStatusComp = ({ classes, className, domId, selected, text, icon, onSelect }: Props) => (
  <div id={domId} className={classNames(classes.root, className)}>
    <TouchRipple
      className={classNames(
        classes.button,
        classes.contour,
        icon ? classes.contentWithIcon : classes.content,
        selected ? classes.selected : classes.normal
      )}
      disabled={selected}
      onClick={selected ? undefined : onSelect}
    >
      <Typography variant="standard" textTransform="uppercase" bold>
        {text}
      </Typography>
      {icon && (
        <div className={classes.icon}>
          <MUIcon
            type={icon}
            fontSize={40}
            color={selected ? theme.palette.actionHighlight.bottomBlue : theme.palette.grey.white}
          />
        </div>
      )}
    </TouchRipple>
  </div>
);

type ClassKey =
  | 'root'
  | 'normal'
  | 'selected'
  | 'contour'
  | 'content'
  | 'contentWithIcon'
  | 'icon'
  | 'button';

const styles: StyleSheet<ClassKey, CompProps> = {
  root: {
    display: 'inline-flex',
    position: 'relative'
  },
  normal: {
    backgroundColor: theme.palette.grey.dark100,
    '& > span': {
      color: theme.palette.grey.white
    }
  },
  selected: {
    backgroundColor: theme.palette.actionHighlight.deepSkyBlueBright,
    '& > span': {
      color: theme.palette.actionHighlight.bottomBlue
    }
  },
  contour: {
    boxShadow: theme.shadow.xs,
    borderRadius: 4
  },
  content: {
    paddingLeft: 34,
    paddingRight: 34
  },
  contentWithIcon: {
    paddingLeft: 34,
    paddingRight: 36
  },
  icon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 40,
    height: 40,
    marginRight: 2,
    marginBottom: 2
  },
  button: {
    display: 'flex',
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export const ButtonStatus = compose<Props, CompProps>(
  setDisplayName('ButtonStatus'),
  injectSheet(styles)
)(ButtonStatusComp);
