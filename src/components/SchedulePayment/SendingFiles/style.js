import Styled from 'styled-components';

export const Container = Styled.div `
  height: 480px;
  width: 100%;
  text-align: center;
  padding: 45px 0;
`;
export const ContentBox = Styled.div`
  margin-top: 35px;
  padding-top: 15px;

`;


export const Title = Styled.h2`
  color: ${props => props.theme.global.main.colorFontTitle || props.color};
  font-family: ${props => props.theme.global.main.fontNormal || props.fontFamily};
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
`;

export const Paragraph = Styled.p`
  color: ${props => props.theme.global.main.colorFontNormal || props.color};
  font-family: ${props => props.theme.global.main.fontNormal || props.fontFamily};
  font-size: 13px;
  padding: 15px 0;
  text-align: center;
`;

export const IconBox = Styled.div`
  text-align: center;
`;

export const ButtonWrapper = Styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  margin-bottom: 20px;
`

