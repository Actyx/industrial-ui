import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { MUIcon } from '../MUIcon';
import { TouchRipple } from '../TouchRipple/TouchRipple';

export type FloatingActionButtonSize = 'sm' | 'md' | 'xl';

export type FloatingActionButtonColor = 'primary' | 'neutral';

type CompProps = Readonly<{
  className?: string;
  size: FloatingActionButtonSize;
  color: FloatingActionButtonColor;
  icon: string;
  disabled?: boolean;
  onClick: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const SIZE_MD = 120;
const SIZE_XL = 150;
const SIZE_SM = 80;

const ICON_SIZES = {
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
      <div>{renderIcon(icon, ICON_SIZES[size])}</div>
    ) : (
      <TouchRipple>{renderIcon(icon, ICON_SIZES[size])}</TouchRipple>
    )}
  </div>
);

type ClassKey = 'xl' | 'md' | 'sm' | 'primary' | 'neutral' | 'disabled';

const styles: StyleSheet<ClassKey> = {
  neutral: {
    backgroundColor: theme.palette.grey[600]
  },
  primary: {
    backgroundColor: theme.palette.primary.main
  },
  md: {
    width: SIZE_MD,
    height: SIZE_MD,
    borderRadius: SIZE_MD / 2,
    boxShadow: theme.shadow.sm,
    '& i': {
      color: theme.palette.primary.contrastText
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
      color: theme.palette.primary.contrastText
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
      color: theme.palette.primary.contrastText
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
