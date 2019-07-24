import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import theme from '../src/styles/theme';

import RadioButton from '../src/components/RadioButton';

storiesOf('Radio button')
  .add('Default', () => (
    <div style={{ background: 'grey', paddingLeft: '15px' }}>
      <RadioButton name="yup" identifier="t1" callback={() => alert('click')}>
        Click aqui
      </RadioButton>
    </div>
  ))
  .add('With two radios', () => (
    <div style={{ background: 'grey', paddingLeft: '15px' }}>
      <RadioButton
        name="yup"
        identifier="t1"
        callback={() => alert('click no primeiro')}
      >
        Click aqui
      </RadioButton>
      <RadioButton
        name="yup"
        identifier="t2"
        callback={() => alert('click no segundo')}
      >
        ou aqui
      </RadioButton>
    </div>
  ))
  .add('With two radios and default seted', () => (
    <div style={{ background: 'grey', paddingLeft: '15px' }}>
      <RadioButton
        name="yup"
        identifier="t1"
        isDefault
        callback={() => alert('click no primeiro')}
      >
        Click aqui
      </RadioButton>
      <RadioButton
        name="yup"
        identifier="t2"
        callback={() => alert('click no segundo')}
      >
        ou aqui
      </RadioButton>
    </div>
  ));
