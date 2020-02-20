import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Toolbar } from './Toolbar';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { common } from '../../colors';

const onClick = action('onClick');

storiesOf('Components|Toolbar', module)
  .addDecorator(hostDecorator({}))
  .add('Variant light content', () => (
    <Toolbar variant="light">
      <Typography variant="distance">Title</Typography>
    </Toolbar>
  ))
  .add('Variant light content/icons', () => (
    <Toolbar variant="light">
      <Button variant="flat" color="transparent" icon="rotate_left" onClick={onClick} />
      <Button variant="flat" color="transparent" icon="rotate_right" onClick={onClick} />
      <Button variant="flat" color="transparent" icon="refresh" onClick={onClick} />
    </Toolbar>
  ))
  .add('Variant dark content', () => (
    <Toolbar variant="dark">
      <Typography variant="distance" color={common.white}>
        Title
      </Typography>
    </Toolbar>
  ));
