import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Card } from './Card';
import { SwipeableCards } from './SwipeableCards';
import { SwipeableContainer } from './SwipeableContainer';
import { common } from '../../colors';

storiesOf('Components|Card.Swipeable', module)
  .addDecorator(hostDecorator({}))
  .add('Swipeable cards', () => (
    <div style={{ width: `calc(${510}px * 2 + (3 * 1rem))` }}>
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
        color: common.white,
        backgroundColor: common.white,
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
