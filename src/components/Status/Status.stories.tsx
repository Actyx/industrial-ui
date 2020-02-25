import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Status } from './Status';

storiesOf('Components/Status', module)
  .addDecorator(hostDecorator())
  .add('Ready', () => <Status variant="ready" message="Ready" />)
  .add('Unknown', () => <Status variant="unknown" message="Unknown" />)
  .add('Requested', () => <Status variant="requested" message="Requested" />);
