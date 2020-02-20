import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { CircularProgress } from './CircularProgress';
import { common, red } from '../../colors';

storiesOf('Components|CircularProgress', module)
  .addDecorator(hostDecorator())
  .add('Variant sm', () => <CircularProgress variant="sm" />)
  .add('Variant md', () => <CircularProgress variant="md" />)
  .add('Color', () => (
    <CircularProgress variant="md" colorIndicator={red[500]} colorTrack={common.black} />
  ));
