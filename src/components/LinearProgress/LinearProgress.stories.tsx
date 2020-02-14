import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { LinearProgress } from './LinearProgress';

storiesOf('common|LinearProgress', module)
  .addDecorator(hostDecorator({}))
  .add('xs', () => <LinearProgress size="xs" color="green" value={20} />)
  .add('md', () => (
    <LinearProgress size="md" color="green" value={20} contentCenter={<strong>10 min</strong>} />
  ))
  .add('md60', () => (
    <LinearProgress size="md60" color="green" value={20} contentCenter={<strong>10 min</strong>} />
  ))
  .add('lg ', () => <LinearProgress size="lg" color="green" value={20} contentCenter="paused" />)
  .add('green', () => <LinearProgress size="md" color="green" value={20} contentCenter="10 min" />)
  .add('orange', () => (
    <LinearProgress size="md" color="orange" value={20} contentCenter="10 min" />
  ))
  .add('yellow', () => (
    <LinearProgress size="md" color="yellow" value={20} contentCenter="10 min" />
  ))
  .add('red', () => <LinearProgress size="md" color="red" value={20} contentCenter="10 min" />)
  .add('grey', () => <LinearProgress size="md" color="grey" value={20} contentCenter="10 min" />)
  .add('white', () => (
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
  .add('brown', () => (
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
  .add('xs content vertical align: center', () => (
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
  .add('xs content vertical align: top', () => (
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
  .add('xs content vertical align: bottom', () => (
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
  .add('md content vertical align: center', () => (
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
  .add('md content vertical align: top', () => (
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
  .add('md content vertical align: bottom', () => (
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
  .add('lg content vertical align: center', () => (
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
  .add('lg content vertical align: top', () => (
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
  .add('lg content vertical align: bottom', () => (
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
  .add('contentRight %', () => (
    <LinearProgress size="md" color="green" value={50} contentRight="50%" contentLeft="" />
  ))
  .add('value % xl', () => (
    <LinearProgress size="lg" color="green" value={50} contentRight="50%" contentLeft="" />
  ))
  .add('value x/y', () => (
    <LinearProgress size="md" color="green" value={50} contentRight="10/20" contentLeft="" />
  ))
  .add('exceed %', () => (
    <LinearProgress size="md" color="green" value={100} contentRight="+20%" contentLeft="120%" />
  ))
  .add('exceed % xl', () => (
    <LinearProgress size="lg" color="green" value={100} contentRight="+20%" contentLeft="120%" />
  ))
  .add('exceed x/y', () => (
    <LinearProgress size="md" color="green" value={100} contentRight="+4" contentLeft="24/20" />
  ))
  .add('exceed h:m', () => (
    <LinearProgress
      size="md"
      color="green"
      value={100}
      contentRight="+30 m"
      contentLeft="1 h 30 m"
    />
  ))
  .add('no message ', () => <LinearProgress size="md" color="green" value={20} />)
  .add('disabled', () => <LinearProgress size="md" color="green" value={20} disabled />)
  .add('disabled with content', () => (
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
