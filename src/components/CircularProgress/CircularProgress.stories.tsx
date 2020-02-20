import { storiesOf } from '@storybook/react';
import { theme } from '../../theme';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { CircularProgress } from './CircularProgress';
import { grey } from '../../colors';

storiesOf('Components|CircularProgress', module)
  .addDecorator(hostDecorator())
  .add('Variant sm', () => <CircularProgress variant="sm" />)
  .add('Variant md', () => <CircularProgress variant="md" />)
  .add('Color', () => (
    <CircularProgress
      variant="md"
      colorIndicator={theme.palette.signal.orange}
      colorTrack={grey[200]}
    />
  ));
