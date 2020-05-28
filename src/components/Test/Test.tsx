import * as React from 'react';

type TestProps = {
  /**
   * Description of prop "name".
   */
  name: string;
};

export function Test({ name }: TestProps) {
  return <div>{name}</div>;
}
