import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const hostDecorator = (styles?: React.CSSProperties) => (story: () => any) => {
  const defaultStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 20
  };
  const style = styles === undefined ? defaultStyle : styles;
  return <div style={style}>{story()}</div>;
};
