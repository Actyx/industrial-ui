import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { FluidDialog } from './FluidDialog';
import { range } from '../../utils';

const longContent = range(0, 100).reduce(acc => acc + ' very long content', '');

storiesOf('Components|Dialog.FluidDialog', module)
  .add('Base', () => <FluidDialog onClose={action('onClose')} content={'content'} />)
  .add('Long content', () => <FluidDialog onClose={action('onClose')} content={longContent} />)
  .add('Long content with header and footer', () => (
    <FluidDialog
      onClose={action('onClose')}
      content={longContent}
      header="header"
      footer="footer"
    />
  ));
