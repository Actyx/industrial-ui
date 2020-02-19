import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { NavigationalTags } from './NavigationalTags';
import { Tag } from './Tag';

storiesOf('Components|NavigationalTags', module)
  .addDecorator(hostDecorator())
  .add('Base', () => (
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
  ))
  .add('Part: Tag', () => <Tag name="Tag name information" onClose={action('onClick')} />);
