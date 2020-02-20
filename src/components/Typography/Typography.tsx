import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import { compose, setDisplayName } from 'recompose';
import injectSheet, { WithStyles, StyleSheet } from 'react-jss';

type TextTransform = 'uppercase' | 'lowercase' | 'capitalize';

export type Variant = 'subtext' | 'standard' | 'distance' | 'big' | 'heading' | 'giant';

type BaseProps = Readonly<{
  color?: string;
  className?: string;
  variant: Variant;
  italic?: boolean;
  textTransform?: TextTransform;
  children: React.ReactNode;
  disabled?: boolean;
  noWrap?: boolean;
  ellipsis?: boolean;
}>;

type Bold = Readonly<{
  bold?: boolean;
  semiBold?: undefined;
}>;

type SemiBold = Readonly<{
  bold?: undefined;
  semiBold?: boolean;
}>;

type CompProps = BaseProps & (Bold | SemiBold);

type ClassKey = 'bold' | 'semiBold' | 'italic' | 'noWrap' | 'ellipsis' | Variant | TextTransform;

type Props = WithStyles<ClassKey> & CompProps;

const getColor = (color?: string, disabled?: boolean) =>
  color
    ? color === 'inherit'
      ? { color }
      : { color: theme.utils.rgba(color, disabled ? 0.5 : 1) }
    : undefined;

const TypographyComp = ({
  classes,
  color,
  className,
  children,
  variant,
  bold,
  semiBold,
  italic,
  textTransform,
  disabled,
  noWrap,
  ellipsis
}: Props) => (
  <span
    style={getColor(color, disabled)}
    className={classNames(
      className,
      classes[variant],
      textTransform ? classes[textTransform] : undefined,
      {
        [classes.bold]: bold,
        [classes.semiBold]: semiBold,
        [classes.italic]: italic,
        [classes.noWrap]: noWrap,
        [classes.ellipsis]: ellipsis
      }
    )}
  >
    {children}
  </span>
);

const defaultColor = theme.palette.grey[900];

const styles: StyleSheet<ClassKey> = {
  bold: {
    fontWeight: 700
  },
  semiBold: {
    fontWeight: 600
  },
  italic: {
    fontStyle: 'italic'
  },
  subtext: {
    color: defaultColor,
    fontSize: theme.typography.fontSizes.small
  },
  standard: {
    color: defaultColor,
    fontSize: theme.typography.fontSizes.standard
  },
  distance: {
    color: defaultColor,
    fontSize: theme.typography.fontSizes.distance
  },
  big: {
    color: defaultColor,
    fontSize: theme.typography.fontSizes.big
  },
  heading: {
    color: defaultColor,
    fontSize: theme.typography.fontSizes.heading
  },
  giant: {
    color: defaultColor,
    fontSize: theme.typography.fontSizes.giant
  },
  uppercase: {
    textTransform: 'uppercase'
  },
  lowercase: {
    textTransform: 'lowercase'
  },
  capitalize: {
    textTransform: 'capitalize'
  },
  noWrap: {
    whiteSpace: 'nowrap'
  },
  ellipsis: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'block'
  }
};

export const Typography = compose<Props, CompProps>(
  setDisplayName('Typography'),
  injectSheet(styles)
)(TypographyComp);
