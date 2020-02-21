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
  items: ReadonlyArray<ListItem>;
  handleClose: () => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

const ListComp = ({ classes, items, handleClose }: Props) => (
  <div className={classes.root}>
    {items.map(({ id, name, icon, onClick }, idx) => (
      <Button
        key={`${id}-${idx}`}
        variant="flat"
        color="transparent"
        icon={icon}
        text={name}
        onClick={() => {
          onClick();
          handleClose();
        }}
      />
    ))}
  </div>
);

type ClassKey = 'root';

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
