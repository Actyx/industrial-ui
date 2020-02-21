import { MUIcon } from '../MUIcon';
import { TouchRipple } from '../TouchRipple';
import { Typography } from '../Typography';
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

export type ButtonCircularColor = 'primary' | 'neutral';

type CompProps = Readonly<{
  className?: string;
  value: string | number;
  icon?: boolean;
  color: ButtonCircularColor;
  onSelect: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const ButtonCircularComp = ({ className, classes, value, icon, color, onSelect }: Props) => (
  <div className={classNames(className, classes[color])} onClick={onSelect}>
    <TouchRipple className={classes.button}>
      {icon ? (
        <MUIcon fontSize={40} type={value.toString()} />
      ) : (
        <Typography variant="big" bold>
          {value}
        </Typography>
      )}
    </TouchRipple>
  </div>
);

const SIZE = 80;

const borderRadius = SIZE / 2;

const button = {
  width: SIZE,
  height: SIZE,
  boxShadow: theme.shadow.xs,
  borderRadius
};

type ClassKey = 'neutral' | 'primary' | 'button';

const styles: StyleSheet<ClassKey> = {
  neutral: {
    ...button,
    background: theme.palette.grey[700]
  },
  primary: {
    ...button,
    backgroundColor: theme.palette.primary.main
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius,
    color: theme.palette.primary.contrastText,
    '& span': {
      color: theme.palette.primary.contrastText,
      lineHeight: 1,
      marginBottom: 4
    }
  }
};

export const ButtonCircular = compose<Props, CompProps>(
  setDisplayName('ButtonCircular'),
  injectSheet(styles)
)(ButtonCircularComp);
