import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Toast from '../src/components/Toast';
import Icon from '../src/components/Icons/eye';
import theme from '../src/styles/theme';

const Wrapper = ({ color, children, Icon, timer }) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <Toast
      color={color}
      Icon={Icon}
      isActive={isActive}
      closeAction={() => setIsActive(false)}
      timer={timer}
    >
      {children}
    </Toast>
  );
};

storiesOf('Toast')
  .add('Default', () => <Wrapper>Óia só como funciona! :D</Wrapper>)
  .add('With icon', () => <Wrapper Icon={Icon}>Com ícone</Wrapper>)
  .add('With shorter timeout', () => (
    <Wrapper time={1000}>Fast as light</Wrapper>
  ))
  .add('With other color', () => (
    <Wrapper color={theme.mainColor}>Teste</Wrapper>
  ));
