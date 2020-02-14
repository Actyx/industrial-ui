import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';

import { theme } from '../../theme';
import { MUIcon } from './MUIcon';

storiesOf('common|MUIcon', module)
  .addDecorator(hostDecorator())
  .add('base', () => <MUIcon type={'face'} />)
  .add('styled', () => (
    <div
      style={{
        fontSize: 48
      }}
    >
      <MUIcon type={'face'} fontSize={48} /> text
    </div>
  ))
  .add('color', () => <MUIcon type={'face'} color={theme.palette.actionHighlight.deepSkyBlue} />);
