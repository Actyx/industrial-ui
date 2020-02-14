import { storiesOf } from '@storybook/react';
import { theme } from '../../theme';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { Arrangement, Status } from './Status';

type Props = { color: string; arrangement: Arrangement };

const baseProps: Props = {
  color: theme.palette.signal.orangeDark,
  arrangement: 'start'
};

storiesOf('Components|Timeline.Status', module)
  .addDecorator(hostDecorator({}))
  .add('single', () => {
    const props: Props = {
      ...baseProps,
      arrangement: 'single',
      color: theme.color.activeGreen
    };
    return <Status {...props} />;
  })
  .add('start', () => <Status {...baseProps} />)
  .add('middle', () => {
    const props: Props = { ...baseProps, arrangement: 'continue' };
    return <Status {...props} />;
  })
  .add('end', () => {
    const props: Props = { ...baseProps, arrangement: 'end' };
    return <Status {...props} />;
  });
