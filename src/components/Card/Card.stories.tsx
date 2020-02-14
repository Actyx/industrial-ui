import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { theme } from '../../theme';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Typography } from '../Typography';
import { Card, CARD_WIDTH } from './Card';
import { Pagination } from './Pagination';
import { PaginationDot } from './PaginationDot';
import { SwipeableCards } from './SwipeableCards';
import { SwipeableContainer } from './SwipeableContainer';

const baseProps = {
  size: 'md' as 'md',
  color: 'neutral' as 'neutral',
  raised: true,
  header: <Typography variant="distance">Title card</Typography>,
  content: 'content'
};

storiesOf('common|Card.Card', module)
  .addDecorator(hostDecorator({}))
  .add('raised', () => <Card {...baseProps} />)
  .add('action', () => {
    const props = { ...baseProps, raised: false, action: 'action' };
    return <Card {...props} />;
  })
  .add('no raised', () => {
    const props = { ...baseProps, raised: false };
    return <Card {...props} />;
  })
  .add('color', () => {
    const props = {
      ...baseProps,
      color: 'red' as 'red',
      header: (
        <Typography variant="distance" color={theme.palette.grey.white}>
          Title card
        </Typography>
      )
    };
    return <Card {...props} />;
  })
  .add('pagination dot', () => <PaginationDot onClick={action('on pagination dot click')} />)
  .add('pagination dot active', () => (
    <PaginationDot onClick={action('on pagination dot click')} active />
  ))
  .add('pagination', () => (
    <div style={{ position: 'relative', width: 200, height: 200 }}>
      <Pagination onChangeIndex={action('on pagination index change')} dots={5} index={3} />
    </div>
  ));

storiesOf('common|Card.mount', module)
  .addDecorator(hostDecorator({}))
  .add('swipeable', () => {
    const styles = {
      slide: {
        padding: 15,
        minHeight: 100,
        width: 300,
        color: '#fff',
        backgroundColor: theme.palette.grey.white,
        display: 'flex'
      },
      card: {
        height: 100,
        width: 100
      },
      slide1: {
        backgroundColor: '#FEA900'
      },
      slide2: {
        backgroundColor: '#B3DC4A'
      },
      slide3: {
        backgroundColor: '#6AC0FF'
      }
    };

    return (
      <div style={{ width: 400, height: 300, backgroundColor: 'pink', padding: 50 }}>
        <h1>Swipeable cards</h1>
        <SwipeableCards className="bg-dark">
          <div style={styles.slide}>
            <div style={{ ...styles.slide, ...styles.slide1 }}>1.1</div>
            <div style={{ ...styles.slide, ...styles.slide1, marginLeft: 50 }}>1.2</div>
          </div>
          <div style={styles.slide}>
            <div style={{ ...styles.slide, ...styles.slide1 }}>2.1</div>
            <div style={{ ...styles.slide, ...styles.slide1, marginLeft: 50 }}>2.2</div>
          </div>
          <div style={styles.slide}>slide n°3</div>
        </SwipeableCards>
      </div>
    );
  })
  .add('Swipeable cards', () => (
    <div style={{ width: `calc(${CARD_WIDTH}px * 2 + (3 * 1rem))` }}>
      <SwipeableCards>
        <SwipeableContainer>
          <Card size="md" color="neutral" raised content={'1.1'} />
          <Card size="md" color="neutral" raised content={'1.2'} />
        </SwipeableContainer>
        <SwipeableContainer>
          <Card size="md" color="neutral" raised content={'2.1 (2.2 is missing)'} />
        </SwipeableContainer>
        <SwipeableContainer>
          <div style={{ backgroundColor: 'ping' }}>3.0 Random full width card</div>
        </SwipeableContainer>
        <SwipeableContainer>
          <Card size="md" color="neutral" raised content={'4.1'} />
          <Card size="md" color="neutral" raised content={'4.2'} />
        </SwipeableContainer>
      </SwipeableCards>
    </div>
  ));
