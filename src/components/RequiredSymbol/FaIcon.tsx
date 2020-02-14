import * as React from 'react';

type Props = Readonly<{
  icon: string;
  id?: string;
}>;

export const FaIcon = ({ icon, id }: Props) => <i className={`fa fa-${icon}`} id={id} />;
