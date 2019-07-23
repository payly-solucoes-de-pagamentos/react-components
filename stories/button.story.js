/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../src/components/Button';
import EditIcon from '../src/components/Icons/edit';

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
  .add('Secondary with Icon', () => (
    <Button isSecondary>
      Secondary <EditIcon />
    </Button>
  ))
  .add('Main to send File', () => (
    <Button fileCharacteristic={fileCharacteristic}>Get File</Button>
  ));
