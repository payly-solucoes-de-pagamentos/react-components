import React from 'react';
import Styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Eye from '../src/components/Icons/eye';

import Tooltip from '../src/components/Tooltip';

const Container = Styled.div`
  padding: 30px;
  display: inline-block;
`;

const Wrapper = ({ children }) => <Container>{children}</Container>;

storiesOf('Tooltip').add('normal use', () => (
  <Wrapper>
    <Tooltip Icon={Eye}>Teste</Tooltip>
  </Wrapper>
));
