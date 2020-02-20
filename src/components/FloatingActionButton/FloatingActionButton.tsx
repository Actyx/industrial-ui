import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { MUIcon } from '../MUIcon';
import { TouchRipple } from '../TouchRipple/TouchRipple';

const SIZE_MD = 120;
const SIZE_XL = 150;
const SIZE_SM = 80;

export type FloatingActionButtonColor = 'primary' | 'neutral';

export type FloatingActionButtonSize = 'sm' | 'md' | 'xl';

type CompProps = Readonly<{
  size: FloatingActionButtonSize;
  color: FloatingActionButtonColor;
  icon: string;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const iconSizes = {
  xl: 80,
  md: 50,
  sm: 40
};

const renderIcon = (icon: string, fontSize: number) => <MUIcon type={icon} fontSize={fontSize} />;

const FloatingActionButtonComp = ({
  classes,
  icon,
  size,
  color,
  onClick,
  className,
  disabled
}: Props) => (
  <div
    className={classNames(
      classes[size],
      className,
      classes[color],
      disabled ? classes.disabled : ''
    )}
    onClick={disabled ? undefined : onClick}
  >
    {disabled ? (
      <div>{renderIcon(icon, iconSizes[size])}</div>
    ) : (
      <TouchRipple>{renderIcon(icon, iconSizes[size])}</TouchRipple>
    )}
  </div>
);

type ClassKey = 'xl' | 'md' | 'sm' | 'primary' | 'neutral' | 'disabled';

const styles: StyleSheet<ClassKey> = {
  neutral: {
    backgroundColor: theme.palette.grey.dark100
  },
  primary: {
    backgroundColor: theme.palette.blue.deepSkyBlue
  },
  md: {
    width: SIZE_MD,
    height: SIZE_MD,
    borderRadius: SIZE_MD / 2,
    boxShadow: theme.shadow.sm,
    '& i': {
      color: theme.palette.grey.white
    },
    '& div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: SIZE_MD,
      height: SIZE_MD,
      borderRadius: SIZE_MD / 2
    }
  },
  xl: {
    width: SIZE_XL,
    height: SIZE_XL,
    borderRadius: SIZE_XL / 2,
    boxShadow: theme.shadow.sm,
    '& i': {
      color: theme.palette.grey.white
    },
    '& div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: SIZE_XL,
      height: SIZE_XL,
      borderRadius: SIZE_XL / 2
    }
  },
  sm: {
    width: SIZE_SM,
    height: SIZE_SM,
    borderRadius: SIZE_SM / 2,
    boxShadow: theme.shadow.sm,
    '& i': {
      color: theme.palette.grey.white
    },
    '& div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: SIZE_SM,
      height: SIZE_SM,
      borderRadius: SIZE_SM / 2
    }
  },
  disabled: {
    filter: `brightness(${200}%) grayscale(${1})`
  }
};

export const FloatingActionButton = compose<Props, CompProps>(
  setDisplayName('FloatingActionButton'),
  injectSheet(styles)
)(FloatingActionButtonComp);
