import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Tag } from './Tag';

storiesOf('Components|NavigationalTags.Tag', module)
  .addDecorator(hostDecorator())
  .add('base', () => <Tag name="Tag name information" onClose={action('onClick')} />);
