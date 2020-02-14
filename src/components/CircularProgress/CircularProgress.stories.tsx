import { storiesOf } from '@storybook/react';
import { theme } from '../../theme';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { CircularProgress } from './CircularProgress';

storiesOf('common|CircularProgress', module)
  .addDecorator(hostDecorator())
  .add('sm', () => <CircularProgress variant="sm" />)
  .add('md', () => <CircularProgress variant="md" />)
  .add('color', () => (
    <CircularProgress
      variant="md"
      colorIndicator={theme.palette.signal.orange}
      colorTrack={theme.palette.grey.light200}
    />
  ));
