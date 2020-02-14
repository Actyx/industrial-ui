import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { DialogHeader } from './DialogHeader';

export const title = 'Title dialog';

storiesOf('common|Dialog.DialogHeader', module)
  .addDecorator(hostDecorator({ width: '100%' }))
  .add('base', () => <DialogHeader text={title} />)
  .add('rightComponent', () => <DialogHeader text={title} rightComponent={'content right'} />);
