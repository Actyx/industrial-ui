import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { LinearProgress } from './LinearProgress';

storiesOf('Components|LinearProgress', module)
  .addDecorator(hostDecorator({}))
  .add('Size xs', () => <LinearProgress size="xs" color="green" value={20} />)
  .add('Size md', () => (
    <LinearProgress size="md" color="green" value={20} contentCenter={<strong>10 min</strong>} />
  ))
  .add('Size md60', () => (
    <LinearProgress size="md60" color="green" value={20} contentCenter={<strong>10 min</strong>} />
  ))
  .add('Size lg ', () => (
    <LinearProgress size="lg" color="green" value={20} contentCenter="paused" />
  ))
  .add('Color green', () => (
    <LinearProgress size="md" color="green" value={20} contentCenter="10 min" />
  ))
  .add('Color orange', () => (
    <LinearProgress size="md" color="orange" value={20} contentCenter="10 min" />
  ))
  .add('Color yellow', () => (
    <LinearProgress size="md" color="yellow" value={20} contentCenter="10 min" />
  ))
  .add('Color red', () => (
    <LinearProgress size="md" color="red" value={20} contentCenter="10 min" />
  ))
  .add('Color grey', () => (
    <LinearProgress size="md" color="grey" value={20} contentCenter="10 min" />
  ))
  .add('Color white', () => (
    <LinearProgress
      border
      size="md"
      color="white"
      value={30}
      contentRight="right"
      contentLeft="left"
      contentCenter={<span>I am center</span>}
    />
  ))
  .add('Color brown', () => (
    <LinearProgress
      border
      size="md"
      color="brown"
      value={30}
      contentRight="right"
      contentLeft="left"
      contentCenter={<span>I am center</span>}
    />
  ))
  .add('Size xs content vertical align: center', () => (
    <LinearProgress
      size="xs"
      contentVerticalAlign="center"
      border
      color="white"
      value={30}
      contentRight="right"
      contentLeft="left"
      contentCenter={<span>I am center</span>}
    />
  ))
  .add('Size xs content vertical align: top', () => (
    <LinearProgress
      size="xs"
      contentVerticalAlign="top"
      border
      color="white"
      value={30}
      contentRight="right"
      contentLeft="left"
      contentCenter={<span>I am center</span>}
    />
  ))
  .add('Size xs content vertical align: bottom', () => (
    <LinearProgress
      size="xs"
      contentVerticalAlign="bottom"
      border
      color="white"
      value={30}
      contentRight="right"
      contentLeft="left"
      contentCenter={<span>I am center</span>}
    />
  ))
  .add('Size md content vertical align: center', () => (
    <LinearProgress
      size="md"
      contentVerticalAlign="center"
      border
      color="white"
      value={30}
      contentRight="right"
      contentLeft="left"
      contentCenter={<span>I am center</span>}
    />
  ))
  .add('Size md content vertical align: top', () => (
    <LinearProgress
      size="md"
      contentVerticalAlign="top"
      border
      color="white"
      value={30}
      contentRight="right"
      contentLeft="left"
      contentCenter={<span>I am center</span>}
    />
  ))
  .add('Size md content vertical align: bottom', () => (
    <LinearProgress
      size="md"
      contentVerticalAlign="bottom"
      border
      color="white"
      value={30}
      contentRight="right"
      contentLeft="left"
      contentCenter={<span>I am center</span>}
    />
  ))
  .add('Size lg content vertical align: center', () => (
    <LinearProgress
      size="lg"
      contentVerticalAlign="center"
      border
      color="white"
      value={30}
      contentRight="right"
      contentLeft="left"
      contentCenter={<span>I am center</span>}
    />
  ))
  .add('Size lg content vertical align: top', () => (
    <LinearProgress
      size="lg"
      contentVerticalAlign="top"
      border
      color="white"
      value={30}
      contentRight="right"
      contentLeft="left"
      contentCenter={<span>I am center</span>}
    />
  ))
  .add('Size lg content vertical align: bottom', () => (
    <LinearProgress
      size="lg"
      contentVerticalAlign="bottom"
      border
      color="white"
      value={30}
      contentRight="right"
      contentLeft="left"
      contentCenter={<span>I am center</span>}
    />
  ))
  .add('Content right %', () => (
    <LinearProgress size="md" color="green" value={50} contentRight="50%" contentLeft="" />
  ))
  .add('Value % xl', () => (
    <LinearProgress size="lg" color="green" value={50} contentRight="50%" contentLeft="" />
  ))
  .add('Value x/y', () => (
    <LinearProgress size="md" color="green" value={50} contentRight="10/20" contentLeft="" />
  ))
  .add('Exceed %', () => (
    <LinearProgress size="md" color="green" value={100} contentRight="+20%" contentLeft="120%" />
  ))
  .add('Exceed % xl', () => (
    <LinearProgress size="lg" color="green" value={100} contentRight="+20%" contentLeft="120%" />
  ))
  .add('Exceed x/y', () => (
    <LinearProgress size="md" color="green" value={100} contentRight="+4" contentLeft="24/20" />
  ))
  .add('Exceed h:m', () => (
    <LinearProgress
      size="md"
      color="green"
      value={100}
      contentRight="+30 m"
      contentLeft="1 h 30 m"
    />
  ))
  .add('No message ', () => <LinearProgress size="md" color="green" value={20} />)
  .add('disabled', () => <LinearProgress size="md" color="green" value={20} disabled />)
  .add('disabled content', () => (
    <LinearProgress
      disabled
      size="md"
      color="grey"
      value={0}
      contentRight="right"
      contentLeft="left"
      contentCenter={<span>I am center</span>}
    />
  ))
  .add('onSelect', () => (
    <LinearProgress size="xs" color="green" value={20} onSelect={action('onSelect')} />
  ));
