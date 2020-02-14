import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Typography } from './Typography';
import { hostDecorator, LoremIpsum } from '../../utils';

storiesOf('Components|Typography', module)
  .addDecorator(hostDecorator())
  .add('standard', () => <Typography variant="standard">Standard</Typography>)
  .add('standard bold', () => (
    <Typography variant="standard" bold>
      Standard Bold
    </Typography>
  ))
  .add('standard semiBold', () => (
    <Typography variant="standard" semiBold>
      Standard semiBold
    </Typography>
  ))
  .add('standard italic', () => (
    <Typography variant="standard" italic>
      Standard Italic
    </Typography>
  ))
  .add('standard lowercase', () => (
    <Typography variant="standard" textTransform="lowercase">
      Standard
    </Typography>
  ))
  .add('standard uppercase', () => (
    <Typography variant="standard" textTransform="uppercase">
      Standard
    </Typography>
  ))
  .add('standard capitalize', () => (
    <Typography variant="standard" textTransform="capitalize">
      Standard
    </Typography>
  ))
  .add('subtext', () => <Typography variant="subtext">Subtext</Typography>)
  .add('distance', () => <Typography variant="distance">Distance</Typography>)
  .add('big', () => <Typography variant="big">Big</Typography>)
  .add('giant', () => <Typography variant="giant">Giant</Typography>)
  .add('heading', () => <Typography variant="heading">Heading</Typography>)
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
