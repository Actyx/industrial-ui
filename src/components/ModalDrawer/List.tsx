import { Button } from '../Button';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

export type ListItem = Readonly<{
  id: string;
  name: React.ReactNode;
  icon?: string;
  iconComponent?: React.ReactNode;
  onClick: () => void;
}>;

type CompProps = Readonly<{
  list: ReadonlyArray<ListItem>;
  handleClose: () => void;
}>;

type ClassKey = 'root';

type Props = WithStyles<ClassKey> & CompProps;

const ListComp = ({ classes, list, handleClose }: Props) => (
  <div className={classes.root}>
    {list.map(({ id, name, icon, onClick }, idx) => (
      <Button
        key={`${id}-${idx}`}
        variant="flat"
        color="transparent"
        icon={icon}
        text={name}
        onClick={() => {
          // tslint:disable-next-line:no-expression-statement
          onClick();
          // tslint:disable-next-line:no-expression-statement
          handleClose();
        }}
      />
    ))}
  </div>
);

const styles: StyleSheet<ClassKey> = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& i': {
      color: '#555555'
    }
  }
};

export const List = compose<Props, CompProps>(
  setDisplayName('List'),
  injectSheet(styles)
)(ListComp);
