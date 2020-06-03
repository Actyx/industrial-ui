/*
 * Copyright 2020 Actyx AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { theme } from '../../theme';
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

export type ToggleButtonsItem = Readonly<{
  id: string;
  label: React.ReactNode;
}>;

type CompProps = Readonly<{
  items: ReadonlyArray<ToggleButtonsItem>;
  initToggledItemId?: string;
  onToggle: (id: string) => void;
}>;

type Props = WithStyles<ClassKey> & CompProps;

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

const border = `1px solid ${theme.palette.grey[700]}`;

const styles: StyleSheet<ClassKey, CompProps> = {
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
    backgroundColor: theme.palette.common.white,
    color: theme.palette.grey[900]
  },
  selectedItem: {
    backgroundColor: theme.palette.grey[600],
    color: theme.palette.primary.contrastText
  }
};

/**
 * ToggleButtons provide the user a grouped related options.
 * It provides an exclusive selection and it remembers whether it is pressed or unpressed.
 */
export const ToggleButtons = compose<Props, CompProps>(
  injectSheet(styles),
  setDisplayName('ToggleButtons')
)(ToggleButtonsComp);
