import React from 'react';
import { storiesOf } from '@storybook/react';
import AutoExample from '../../.storybook/components/AutoExample';
import Textarea from '../../components/Textarea';

storiesOf('3. Forms', module)
  .add('Textarea', () => (
    <AutoExample
      component={Textarea}
      componentProps={{
        id: 'text-area',
        name: 'textarea',
        label: 'Text area',
      }}
    />
  ));
