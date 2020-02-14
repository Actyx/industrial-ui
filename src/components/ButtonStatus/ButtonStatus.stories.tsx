import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { hostDecorator } from '../../utils';
import * as React from 'react';
import { ButtonStatus } from './ButtonStatus';

const baseProps = {
  text: 'Platform 1',
  onSelect: action('onSelect')
};

storiesOf('Components|ButtonStatus.ButtonStatus', module)
  .addDecorator(hostDecorator())
  .add('base', () => {
    const props = {
      ...baseProps,
      selected: false
    };
    return <ButtonStatus {...props} />;
  })
  .add('long', () => {
    const props = {
      ...baseProps,
      text: 'Very long content',
      selected: false
    };
    return <ButtonStatus {...props} />;
  })
  .add('selected', () => {
    const props = {
      ...baseProps,
      selected: true
    };
    return <ButtonStatus {...props} />;
  })
  .add('selected icon', () => {
    const props = {
      ...baseProps,
      selected: true,
      icon: 'person'
    };
    return <ButtonStatus {...props} />;
  })
  .add('unselected icon', () => {
    const props = {
      ...baseProps,
      selected: false,
      icon: 'person'
    };
    return <ButtonStatus {...props} />;
  });

storiesOf('Components|ButtonStatus.mount', module)
  .addDecorator(hostDecorator())
  .add('inline', () => (
    <div>
      {['Workstation 1', 'Workstation 2', 'Workstation 3', ' Ws 4'].map(x => (
        <span style={{ padding: 10 }} key={x}>
          <ButtonStatus text={x} selected={false} onSelect={action('onSelect')} />
        </span>
      ))}
    </div>
  ));
