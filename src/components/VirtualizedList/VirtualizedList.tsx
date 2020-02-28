/* eslint-disable @typescript-eslint/ban-ts-ignore */
// import { getScrollbarWidth } from '../../utils';
import * as classNames from 'classnames';
import * as React from 'react';
import Measure from 'react-measure';
import { ListChildComponentProps, VariableSizeList } from 'react-window';
// FIXME our custom type for `react-jss` currently do not support `createUseStyles`
//@ts-ignore
import { createUseStyles } from 'react-jss';
import { theme } from '../../theme';

const useStyles = createUseStyles({
  list: {
    height: '100%',
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column'
  },
  listHeader: {
    display: 'flex',
    borderBottom: '1px solid #d6d6d6',
    '& > div': {
      padding: 10
    },
    '& > div:first-child': {
      marginLeft: 14
    },
    '& > div:last-child': {
      marginRight: 14
    }
    //FIXME add compensate scollbar
  },
  listBody: {
    '& > div > div': {
      cursor: 'pointer',
      borderBottom: '1px solid #d6d6d6',
      fontSize: 22,
      height: 80,
      display: 'flex',
      alignItems: 'center'
    },
    '& > div > div > div': {
      padding: 10
    },
    '& > div > div > div.numeric': {
      textAlight: 'right'
    },
    '& > div > div > div.first-child': {
      marginLeft: 14
    },
    '& > div > div > div.last-child': {
      marginRight: 14
    },
    '& div > div.zebra': {
      backgroundColor: '#fafafa;'
    },
    '& div > div.selected': {
      backgroundColor: '#bee5fa;'
    }
  }
});

type Props<T> = Readonly<{
  className?: string;
  data: ReadonlyArray<T>;
  getUniqKey: (datum: T) => string;
  header?: React.ReactNode;
  renderRow: (datum: T, idx: number) => React.ReactNode;
  setRowClassName?: (datum: T) => string | undefined;
  isRowSelected?: (datum: T) => boolean;
  onRowSelect?: (datum: T) => void;
  calcRowHeight?: (datum: T) => number;
}>;

export function VirtualizedList<T>({
  className,
  renderRow,
  header,
  getUniqKey,
  data,
  onRowSelect,
  setRowClassName,
  isRowSelected,
  calcRowHeight
}: Props<T>) {
  const renderItem: React.FunctionComponent<ListChildComponentProps> = ({
    index,
    style
  }: ListChildComponentProps) => {
    const datum = data[index];

    return (
      //FIXME use for setRowClassName inline style
      <div
        key={getUniqKey(datum)}
        className={classNames(setRowClassName && setRowClassName(datum), {
          zebra: index % 2 === 0,
          selected: isRowSelected && isRowSelected(datum)
        })}
        style={style}
        onClick={onRowSelect ? () => onRowSelect(datum) : undefined}
      >
        {renderRow(datum, index)}
      </div>
    );
  };

  const [height, setHeight] = React.useState();

  // FIXME add compensation scrollbar
  // const headerElement = document.getElementsByClassName('ax-virtualized-list-header')[0];
  // if (headerElement) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  // headerElement.style.setProperty('--ax-scrollbar', `${getScrollbarWidth() + 14}px`);
  // }

  const classes = useStyles();

  return (
    <Measure bounds onResize={({ bounds }) => bounds && setHeight(bounds.height)}>
      {({ measureRef }) => (
        <div className={classNames(classes.list, className)}>
          {header && (
            <div
              className={classNames(classes.listHeader, {
                compensate: height && data.length > height / 80
              })}
            >
              {header}
            </div>
          )}
          <div ref={measureRef} style={{ flex: 1 }}>
            {height && (
              <VariableSizeList
                className={classes.listBody}
                width="100%"
                height={height}
                itemCount={data.length}
                itemSize={calcRowHeight ? idx => calcRowHeight(data[idx]) : () => 80}
              >
                {renderItem}
              </VariableSizeList>
            )}
          </div>
        </div>
      )}
    </Measure>
  );
}
