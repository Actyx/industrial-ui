import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { theme } from '../../../theme';
import { hostDecorator } from '../../../utils';
import * as React from 'react';
import { HeaderContainer } from './HeaderContainer';
import { Typography } from '../../Typography';
import { Button } from '../../Button';

const onClick = action('onClick');

storiesOf('Components.BaseHeader.HeaderContainer', module)
  .addDecorator(hostDecorator({}))
  .add('light content', () => (
    <HeaderContainer variant="light">
      <Typography variant="distance">Title</Typography>
    </HeaderContainer>
  ))
  .add('light content/icons', () => (
    <HeaderContainer variant="light">
      <Button variant="flat" color="transparent" icon="rotate_left" onClick={onClick} />
      <Button variant="flat" color="transparent" icon="rotate_right" onClick={onClick} />
      <Button variant="flat" color="transparent" icon="refresh" onClick={onClick} />
    </HeaderContainer>
  ))
  .add('dark content', () => (
    <HeaderContainer variant="dark">
      <Typography variant="distance" color={theme.palette.grey.white}>
        Title
      </Typography>
    </HeaderContainer>
  ))
  .add('two next to each other', () => (
    <div style={{ display: 'flex' }}>
      <div>
        <HeaderContainer variant="light" className="mr-5">
          <Typography variant="distance">Left</Typography>
        </HeaderContainer>
      </div>
      <div>
        <HeaderContainer variant="light">
          <Typography variant="distance">
            No border should be visible between the two headers
          </Typography>
        </HeaderContainer>
      </div>
    </div>
  ));
