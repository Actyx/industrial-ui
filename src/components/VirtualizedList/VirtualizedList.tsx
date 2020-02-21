import { getScrollbarWidth } from '../../utils';
import * as classNames from 'classnames';
import * as React from 'react';
import Measure from 'react-measure';
import { ListChildComponentProps, VariableSizeList } from 'react-window';
import './virtualized-list.css';

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

  const headerElement = document.getElementsByClassName('ax-virtualized-list-header')[0];
  if (headerElement) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    headerElement.style.setProperty('--ax-scrollbar', `${getScrollbarWidth() + 14}px`);
  }

  return (
    <Measure bounds onResize={({ bounds }) => bounds && setHeight(bounds.height)}>
      {({ measureRef }) => (
        <div className={classNames('ax-virtualized-list', className)}>
          {header && (
            <div
              className={classNames('ax-virtualized-list-header', {
                compensate: height && data.length > height / 80
              })}
            >
              {header}
            </div>
          )}
          <div ref={measureRef} style={{ flex: 1 }}>
            {height && (
              <VariableSizeList
                className="ax-virtualized-list-body"
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
