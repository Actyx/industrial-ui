import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Typography } from './Typography';
import { hostDecorator, LoremIpsum } from '../../utils';

storiesOf('Components/Typography', module)
  .addDecorator(hostDecorator())
  .add('Standard', () => <Typography variant="standard">Standard</Typography>)
  .add('Standard bold', () => (
    <Typography variant="standard" bold>
      Standard Bold
    </Typography>
  ))
  .add('Standard semiBold', () => (
    <Typography variant="standard" semiBold>
      Standard semiBold
    </Typography>
  ))
  .add('Standard italic', () => (
    <Typography variant="standard" italic>
      Standard Italic
    </Typography>
  ))
  .add('Standard lowercase', () => (
    <Typography variant="standard" textTransform="lowercase">
      Standard
    </Typography>
  ))
  .add('Standard uppercase', () => (
    <Typography variant="standard" textTransform="uppercase">
      Standard
    </Typography>
  ))
  .add('Standard capitalize', () => (
    <Typography variant="standard" textTransform="capitalize">
      Standard
    </Typography>
  ))
  .add('Subtext', () => <Typography variant="subtext">Subtext</Typography>)
  .add('Distance', () => <Typography variant="distance">Distance</Typography>)
  .add('Big', () => <Typography variant="big">Big</Typography>)
  .add('Giant', () => <Typography variant="giant">Giant</Typography>)
  .add('Heading', () => <Typography variant="heading">Heading</Typography>)
  .add('noWrap', () => (
    <div style={{ width: 100 }}>
      <Typography variant="standard" noWrap>
        No wrap this line of text
      </Typography>
    </div>
  ))
  .add('ellipsis', () => (
    <div style={{ width: 500 }}>
      <Typography variant="standard" ellipsis>
        {LoremIpsum}
      </Typography>
    </div>
  ));
