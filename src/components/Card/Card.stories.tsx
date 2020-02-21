import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Typography } from '../Typography';
import { Card } from './Card';
import { common } from '../../colors';

const baseProps = {
  size: 'md' as 'md',
  color: 'neutral' as 'neutral',
  raised: true,
  header: <Typography variant="distance">Title card</Typography>,
  content: 'content'
};

storiesOf('Components|Card.Card', module)
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
  .add('Color red', () => {
    const props = {
      ...baseProps,
      color: 'red' as 'red',
      header: (
        <Typography variant="distance" color={common.white}>
          Title card
        </Typography>
      )
    };
    return <Card {...props} />;
  });
