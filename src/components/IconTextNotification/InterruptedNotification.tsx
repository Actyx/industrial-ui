import { theme } from '../../theme';
import * as React from 'react';
import { IconTextNotification } from './IconTextNotification';

type OuterProps = Readonly<{
  counter?: number;
  smallSize?: boolean;
}>;

type Props = OuterProps;

export function InterruptedNotification({ counter, smallSize = false }: Props): JSX.Element {
  return (
    <IconTextNotification
      icon="warning"
      text={'Interrupted'}
      color={theme.palette.signal.red}
      counter={counter}
      smallSize={smallSize}
    />
  );
}
