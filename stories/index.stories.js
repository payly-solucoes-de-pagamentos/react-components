import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from '../src/Components/Modal'

storiesOf("teste", module).
add('testeDoAdd', () => <Modal active />);
