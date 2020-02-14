import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { TouchRipple } from '../TouchRipple';
import { Typography } from '../Typography';

type OuterProps = Readonly<{
  disabled?: boolean;
  text: React.ReactNode;
  onClick?: () => void;
}>;

type Props = WithStyles<ClassKey> & OuterProps;

const SimpleToolbarButtonComp = ({ classes, text, disabled, onClick }: Props) => (
  <div className={classes.root}>
    <TouchRipple
      disabled={disabled}
      className={classNames(classes.button, { [classes.disabled]: disabled })}
      onClick={onClick}
    >
      <Typography
        variant="standard"
        color={theme.palette.grey.white}
        textTransform="uppercase"
        bold
      >
        {text}
      </Typography>
    </TouchRipple>
  </div>
);

type ClassKey = 'root' | 'button' | 'disabled';

const styles: StyleSheet<ClassKey, OuterProps> = {
  root: {
    height: 80
  },
  button: {
    display: 'flex',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: theme.palette.actionHighlight.deepSkyBlue
  },
  disabled: {
    backgroundColor: theme.palette.grey.light200
  }
};

export const SimpleToolbarButton = compose<Props, OuterProps>(
  setDisplayName('SimpleToolbarButton'),
  injectSheet(styles)
)(SimpleToolbarButtonComp);
