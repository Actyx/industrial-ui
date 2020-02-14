import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Status } from './Status';

storiesOf('Components|Status.Status', module)
  .addDecorator(hostDecorator())
  .add('ready', () => <Status status="ready" message="Ready" />)
  .add('unknown', () => <Status status="unknown" message="Unknown" />)
  .add('requested', () => <Status status="requested" message="Requested" />);
