import { TouchRipple } from '../TouchRipple';
import { Typography } from '../Typography';
import { theme } from '../../theme';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import { compose, setDisplayName } from 'recompose';

export type HorizontallyScrollableListItem = Readonly<{
  id: string;
  name: string;
}>;

type CompProps = Readonly<{
  items: ReadonlyArray<HorizontallyScrollableListItem>;
  rows: number;
  onItemSelect: (item: HorizontallyScrollableListItem) => void;
}>;

type ClassKey = 'root' | 'itemContainer' | 'item';

type Props = WithStyles<ClassKey> & CompProps;

const HorizontallyScrollableListComp = ({ classes, items, onItemSelect, rows }: Props) => {
  const cols = Math.ceil(items.length / rows);
  const matrix: (HorizontallyScrollableListItem | undefined)[][] = Array(rows)
    .fill(undefined)
    .map(() => Array(cols).fill(undefined));

  for (let col = 0, idx = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      matrix[row][col] = items[idx++];
    }
  }

  return (
    <div className={classes.root}>
      <table>
        <tbody>
          {matrix.map((x, idxx) => {
            const rowKey = x.map((y, z) => (y ? y.name : z)).join('-') + idxx;
            return (
              <tr key={rowKey}>
                {x.map((item, idx) => {
                  const backgroundColor =
                    idx % 2 === 0 ? theme.palette.grey.grayVeryLight : theme.palette.grey.white;
                  return item ? (
                    <td
                      key={rowKey + item.name}
                      style={{ backgroundColor }}
                      onClick={() => onItemSelect(item)}
                    >
                      <TouchRipple className={classes.itemContainer}>
                        <div className={classes.item}>
                          <Typography variant="standard" textTransform="uppercase">
                            {item.name}
                          </Typography>
                        </div>
                      </TouchRipple>
                    </td>
                  ) : (
                    <td key={rowKey + idx} style={{ backgroundColor }} />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const borderWidth = 1;
const styles: StyleSheet<ClassKey> = {
  root: {
    overflowY: 'hidden',
    overflowX: 'auto',
    '& table': {
      borderCollapse: 'collapse',
      border: 'none'
    },
    '& td': {
      border: `${borderWidth}px solid ${theme.palette.grey.grayVeryLight2}`,
      padding: 0
    }
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    width: 360 - borderWidth,
    height: 80 - borderWidth
  },
  item: {
    width: '100%',
    height: '100%'
  }
};

export const HorizontallyScrollableList = compose<Props, CompProps>(
  setDisplayName('HorizontallyScrollableList'),
  injectSheet(styles)
)(HorizontallyScrollableListComp);
