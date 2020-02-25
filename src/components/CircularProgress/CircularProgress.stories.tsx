import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { CircularProgress } from './CircularProgress';
import { common, red } from '../../colors';

storiesOf('Components/CircularProgress', module)
  .addDecorator(hostDecorator())
  .add('Variant sm', () => <CircularProgress size="sm" />)
  .add('Variant md', () => <CircularProgress size="md" />)
  .add('Color', () => (
    <CircularProgress size="md" colorIndicator={red[500]} colorTrack={common.black} />
  ));
