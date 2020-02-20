import { storiesOf } from '@storybook/react';
import { hostDecorator, LoremIpsumShort } from '../../utils';
import * as React from 'react';
import { TooltipGuide } from './TooltipGuide';

storiesOf('Components|TooltipGuide', module)
  .addDecorator(hostDecorator({}))
  .add('Base', () => <TooltipGuide content={LoremIpsumShort} />);
