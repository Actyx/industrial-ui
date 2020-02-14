import * as React from 'react';
import { Typography } from '../Typography';

type CompProps = Readonly<{
  text: React.ReactNode;
  rightComponent?: React.ReactNode;
}>;

type Props = CompProps;

export function DialogHeader({ text, rightComponent }: Props): JSX.Element {
  return (
    <div className="d-flex justify-content-between">
      <Typography variant="big" bold>
        {text}
      </Typography>
      {rightComponent && <div>{rightComponent}</div>}
    </div>
  );
}
