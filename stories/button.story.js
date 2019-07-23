/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';

const fileCharacteristic = {
  id: 'testezin',
  multiple: false,
  name: 'teste',
  onChange: e => {
    console.log('FILE => ', e.target.value);
  },
};

storiesOf('Buttons')
  .add('Main', () => <Button>Primary</Button>)
  .add('Secondary', () => <Button isSecondary>Secondary</Button>)
  .add('Main to send File', () => (
    <Button fileCharacteristic={fileCharacteristic}>Get File</Button>
  ));
