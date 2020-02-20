import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { TooltipGuide } from './TooltipGuide';

const content = 'Enter an estimated number of items to be cleaned for this activity.';

storiesOf('Components|TooltipGuide', module)
  .addDecorator(hostDecorator({}))
  .add('Base', () => <TooltipGuide color="neutral" content={content} />);
