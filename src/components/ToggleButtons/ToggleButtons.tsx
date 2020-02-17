import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet from 'react-jss';
import { compose, setDisplayName } from 'recompose';
import { WithStyles, StyleSheet } from '../../utils/jss';

export type ToggleItem = Readonly<{
  id: string;
  label: React.ReactNode;
}>;

export type ToggleButtonsItems = ReadonlyArray<ToggleItem>;

type OuterProps = Readonly<{
  items: ToggleButtonsItems;
  initToggledItemId?: string;
  onToggle: (id: string) => void;
}>;

type Props = WithStyles<ClassKey> & OuterProps;

export const ToggleButtonsComp = ({ classes, items, initToggledItemId, onToggle }: Props) => {
  const [toggledIndex, setToggledIndex] = React.useState<undefined | string>(initToggledItemId);

  const handleOnClick = (id: string) => {
    if (toggledIndex !== id) {
      setToggledIndex(id);
      onToggle(id);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {items.map(x => (
          <div
            key={x.id}
            className={classNames(classes.item, {
              [classes.selectedItem]: x.id === toggledIndex
            })}
            onClick={() => handleOnClick(x.id)}
          >
            {x.label}
          </div>
        ))}
      </div>
    </div>
  );
};

type ClassKey = 'root' | 'container' | 'item' | 'selectedItem';

const border = `1px solid ${theme.palette.grey.dark200}`;

const styles: StyleSheet<ClassKey> = {
  root: {
    display: 'inline-block',
    height: 60
  },
  container: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    '& > div': {
      flex: 1,
      whiteSpace: 'nowrap',
      border,
      borderLeft: 'none'
    },
    '& > div:first-child': {
      border,
      borderBottomLeftRadius: 8,
      borderTopLeftRadius: 8
    },
    '& > div:last-child': {
      borderRight: border,
      borderTop: border,
      borderBottom: border,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8
    }
  },
  item: {
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.grey.white,
    color: theme.palette.grey.dark400
  },
  selectedItem: {
    backgroundColor: theme.palette.grey.dark100,
    color: theme.palette.grey.white
  }
};

export const ToggleButtons = compose<Props, OuterProps>(
  injectSheet(styles),
  setDisplayName('ToggleButtons')
)(ToggleButtonsComp);
