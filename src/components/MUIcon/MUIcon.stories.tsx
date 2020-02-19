import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';

import { theme } from '../../theme';
import { MUIcon } from './MUIcon';

storiesOf('Components|MUIcon', module)
  .addDecorator(hostDecorator())
  .add('Base', () => <MUIcon type={'face'} />)
  .add('Font size', () => <MUIcon type={'face'} fontSize={48} />)
  .add('Color', () => <MUIcon type={'face'} color={theme.palette.actionHighlight.deepSkyBlue} />);
