import { MUIcon } from '../MUIcon';
import { TouchRipple } from '../TouchRipple';
import { Typography } from '../Typography';
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { WithStyles, StyleSheet } from '../../utils/jss';

type Color = 'primary' | 'neutral';

type CompProps = Readonly<{
  className?: string;
  value: string | number;
  icon?: boolean;
  color: Color;
  onSelect: () => void;
}>;

type ClassKey = 'neutral' | 'primary' | 'button';

const SIZE = 80;

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

const borderRadius = SIZE / 2; // TODO add better support for rounded corner touch ripple

const button = {
  width: SIZE,
  height: SIZE,
  boxShadow: theme.shadow.xs,
  borderRadius
};

const styles: StyleSheet<ClassKey> = {
  neutral: {
    ...button,
    background: theme.palette.grey.dark200
  },
  primary: {
    ...button,
    backgroundColor: theme.palette.actionHighlight.deepSkyBlue
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius,
    color: theme.palette.grey.white,
    '& span': {
      color: theme.palette.grey.white,
      lineHeight: 1,
      marginBottom: 4
    }
  }
};

export const ButtonCircular = compose<Props, CompProps>(
  setDisplayName('Button'),
  injectSheet(styles)
)(ButtonCircularComp);
