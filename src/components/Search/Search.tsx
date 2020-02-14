import { MUIcon } from '../MUIcon';
import { theme } from '../../theme';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

type CompProps = Readonly<{
  value: string;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}>;
type ClassKey = 'root' | 'icon';

type Props = WithStyles<ClassKey> & CompProps;

const SearchComp = ({ classes, value, placeholder, onFocus, onBlur, onChange }: Props) => (
  <div className={classes.root}>
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
    />
    <div className={classes.icon}>
      <MUIcon type={'search'} fontSize={48} />
    </div>
  </div>
);

const styles: StyleSheet<ClassKey> = {
  root: {
    height: 60,
    '& input': {
      fontSize: 28,
      border: 'none',
      paddingRight: 10,
      paddingLeft: 10,
      width: '100%'
    },
    display: 'flex',
    width: '100%',
    border: `${1}px solid ${theme.palette.grey.light200}`,
    background: theme.palette.grey.white
  },
  icon: {
    '& i': {
      padding: 6
    }
  }
};

export const Search = compose<Props, CompProps>(
  setDisplayName('Search'),
  injectSheet(styles)
)(SearchComp);
