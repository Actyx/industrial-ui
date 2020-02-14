import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';

import * as React from 'react';
import { SimpleToolbarButton } from './SimpleToolbarButton';

storiesOf('common|SimpleToolbar.SimpleToolbarButton', module)
  .addDecorator(hostDecorator({}))
  .add('enabled', () => <SimpleToolbarButton text="Confirm" onClick={action('onClick')} />)
  .add('disabled', () => (
    <SimpleToolbarButton text="Confirm" disabled onClick={action('onClick')} />
  ));
