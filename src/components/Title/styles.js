import styled from 'styled-components';
import { fontStyle } from '../../styles/mixins';
import { GRAY_DARKER } from '../../styles/variables';

export const Title = styled.h1`
  margin: 0px;
  ${fontStyle(GRAY_DARKER)}
  font-size: 35px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
`;
