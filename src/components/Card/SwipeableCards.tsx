/* tslint:disable no-this no-class */
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet from 'react-jss';
import SwipeableViews from 'react-swipeable-views';
import { compose, setDisplayName } from 'recompose';
import { Pagination } from './Pagination';
import { WithStyles, StyleSheet } from '../../utils/jss';

type OuterProps = Readonly<{
  children: React.ReactNode;
  className?: string;
  defaultActiveViewIndex?: number;
}>;

type Props = WithStyles<ClassKey> & OuterProps;

type State = Readonly<{
  activeViewIndex: number;
}>;

class SwipeableCardsComp extends React.Component<Props, State> {
  constructor(props: Props) {
    // tslint:disable-next-line:no-expression-statement
    super(props);
    // tslint:disable-next-line:no-expression-statement
    this.state = {
      activeViewIndex:
        props.defaultActiveViewIndex === undefined ||
        props.defaultActiveViewIndex < 0 ||
        props.defaultActiveViewIndex >= React.Children.count(props.children)
          ? 0
          : props.defaultActiveViewIndex
    };
  }

  static getDerivedStateFromProps(props: Props, state: State): State | null {
    const childrenCount = React.Children.count(props.children);
    return childrenCount <= state.activeViewIndex
      ? {
          activeViewIndex: 0
        }
      : null;
  }

  handleOnViewIndexChange = (index: number) => {
    this.setState({ activeViewIndex: index });
  };

  render(): React.ReactNode {
    const { classes, children, className } = this.props;
    const { activeViewIndex } = this.state;

    return (
      <div className={classNames(classes.root, className)}>
        <SwipeableViews
          enableMouseEvents
          index={activeViewIndex}
          onChangeIndex={this.handleOnViewIndexChange}
        >
          {children}
        </SwipeableViews>
        <Pagination
          onChangeIndex={this.handleOnViewIndexChange}
          dots={React.Children.count(children)}
          index={activeViewIndex}
        />
      </div>
    );
  }
}

type ClassKey = 'root';

const styles: StyleSheet<ClassKey> = {
  root: {
    position: 'relative'
  }
};

export const SwipeableCards = compose<Props, OuterProps>(
  setDisplayName('SwipeableCards'),
  injectSheet(styles)
)(SwipeableCardsComp);
