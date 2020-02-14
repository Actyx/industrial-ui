import { storiesOf } from '@storybook/react';
import { theme } from '../../theme';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { TooltipGuide } from './TooltipGuide';

const content = 'Enter an estimated number of items to be cleaned for this activity.';

storiesOf('common|TooltipGuide', module)
  .addDecorator(
    hostDecorator({
      width: 500,
      height: 600,
      background: theme.palette.grey.light100
    })
  )
  .add('base', () => <TooltipGuide color="neutral" content={content} />);
