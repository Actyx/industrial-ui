import { storiesOf } from '@storybook/react';
import { theme } from '../../theme';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Typography } from '../Typography';
import { Card, CARD_WIDTH } from './Card';
import { SwipeableCards } from './SwipeableCards';
import { SwipeableContainer } from './SwipeableContainer';

const baseProps = {
  size: 'md' as 'md',
  color: 'neutral' as 'neutral',
  raised: true,
  header: <Typography variant="distance">Title card</Typography>,
  content: 'content'
};

storiesOf('Components|Card', module)
  .addDecorator(hostDecorator({}))
  .add('Raised', () => <Card {...baseProps} />)
  .add('Action', () => {
    const props = { ...baseProps, raised: false, action: 'action' };
    return <Card {...props} />;
  })
  .add('Flat', () => {
    const props = { ...baseProps, raised: false };
    return <Card {...props} />;
  })
  .add('Color', () => {
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
  .add('Swipeable cards', () => (
    <div style={{ width: `calc(${CARD_WIDTH}px * 2 + (3 * 1rem))` }}>
      <SwipeableCards>
        <SwipeableContainer>
          <Card size="md" color="neutral" raised content={'1.1'} />
          <Card size="md" color="neutral" raised content={'1.2'} />
        </SwipeableContainer>
        <SwipeableContainer>
          <Card size="md" color="neutral" raised content={'2.1'} />
          <Card size="md" color="neutral" raised content={'2.2'} />
        </SwipeableContainer>
        <SwipeableContainer>
          <Card size="md" color="neutral" raised content={'3.1'} />
          <Card size="md" color="neutral" raised content={'3.2'} />
        </SwipeableContainer>
      </SwipeableCards>
    </div>
  ))
  .add('Swipe anything', () => {
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
      <div style={{ width: 400, height: 300, padding: 50 }}>
        <h1>Swipe anything</h1>
        <SwipeableCards className="bg-dark">
          <div style={styles.slide}>
            <div style={{ ...styles.slide, ...styles.slide1 }}>1.1</div>
            <div style={{ ...styles.slide, ...styles.slide1, marginLeft: 50 }}>1.2</div>
          </div>
          <div style={styles.slide}>
            <div style={{ ...styles.slide, ...styles.slide1 }}>2.1</div>
            <div style={{ ...styles.slide, ...styles.slide1, marginLeft: 50 }}>2.2</div>
          </div>
        </SwipeableCards>
      </div>
    );
  });
