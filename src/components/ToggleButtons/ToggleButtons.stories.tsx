import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Typography } from '../Typography';
import { ToggleButtons, ToggleButtonsItems } from './ToggleButtons';

const items: ToggleButtonsItems = [
  {
    id: 'first',
    label: 'First'
  },
  {
    id: 'second',
    label: 'Second longer item'
  },
  {
    id: 'third',
    label: (
      <>
        <Typography variant="standard" bold color="inherit">
          PCS
        </Typography>
        &nbsp;
        <Typography variant="subtext" color="inherit">
          (output)
        </Typography>
      </>
    )
  }
];

const baseProps = {
  items,
  onToggle: action('onToggle')
};

storiesOf('Components|ToggleButtons', module)
  .addDecorator(hostDecorator())
  .add('base', () => <ToggleButtons {...baseProps} />)
  .add('one item', () => <ToggleButtons {...baseProps} items={[items[2]]} />)
  .add('init selection', () => <ToggleButtons {...baseProps} initToggledItemId="third" />);
