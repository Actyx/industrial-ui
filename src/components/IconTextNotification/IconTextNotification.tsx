import { MUIcon } from '../MUIcon';
import * as React from 'react';
import { Typography } from '../Typography';

type Props = Readonly<{
  icon: string;
  text: React.ReactNode;
  color: string;
  smallSize?: boolean;
  counter?: number;
}>;

export const IconTextNotification = ({ icon, text, color, smallSize = false, counter }: Props) => (
  <div className="d-flex align-items-center">
    <MUIcon type={icon} fontSize={smallSize ? 28 : 37} color={color} className="mr-2" />
    <Typography
      variant={smallSize ? 'standard' : 'distance'}
      color={color}
      textTransform="uppercase"
      bold
    >
      {text}
      {counter && ` x${counter}`}
    </Typography>
  </div>
);
