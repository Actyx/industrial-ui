import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { NavigationalTags } from './NavigationalTags';

storiesOf('common|NavigationalTags.NavigationalTags', module)
  .addDecorator(hostDecorator())
  .add('base', () => (
    <NavigationalTags
      tags={[
        {
          id: 'tag0',
          name: 'Tag name 0 information '
        },
        {
          id: 'tag1',
          name: 'Tag name 1 information'
        },
        {
          id: 'tag2',
          name: 'Tag name 2 information'
        }
      ]}
      onTagClose={action('onTagClose')}
    />
  ));
