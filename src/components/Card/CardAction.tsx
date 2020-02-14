import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { Button } from '../Button';

type CompProps = Readonly<{
  onClick: () => void;
  buttonText: React.ReactNode;
  white?: boolean;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const CardActionComp = ({ classes, onClick, buttonText, white }: Props) => (
  <div className={classNames(classes.root, { [classes.white]: white })}>
    <Button variant="flat" color="transparent" text={buttonText} onClick={onClick} />
  </div>
);

type ClassKey = 'root' | 'white';

const styles: StyleSheet<ClassKey> = {
  root: {
    display: 'flex',
    alignItems: 'center',
    paddingRight: 20,
    minHeight: 80
  },
  white: {
    '& span': {
      color: theme.palette.grey.white
    }
  }
};

export const CardAction = compose<Props, CompProps>(
  setDisplayName('CardAction'),
  injectSheet(styles)
)(CardActionComp);
