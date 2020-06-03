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
import * as classNames from 'classnames';
import * as React from 'react';
import injectSheet, { StyleSheet, WithStyles } from 'react-jss';
import SwipeableViews from 'react-swipeable-views';
import { compose, setDisplayName } from 'recompose';
import { PaginationDots } from '../PaginationDots';

type CompProps = Readonly<{
  className?: string;
  children: React.ReactNode;
  defaultActiveViewIndex?: number;
}>;

type Props = WithStyles<ClassKey> & CompProps;

type State = Readonly<{
  activeViewIndex: number;
}>;

class SwipeableCardsComp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
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
        <PaginationDots
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

/**
 * SwipeableCards is a container component for swipeable items including Cards.
 * Below an example of swiping Cards or any other UI elements.
 */
export const SwipeableCards = compose<Props, CompProps>(
  setDisplayName('SwipeableCards'),
  injectSheet(styles)
)(SwipeableCardsComp);
