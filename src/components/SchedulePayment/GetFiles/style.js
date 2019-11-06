import Styled from 'styled-components';

export const Title = Styled.p`
  color: ${props => props.theme.global.main.colorFontNormal};
  font-family: ${props => props.theme.global.main.fontNormal};
  font-size: 20px;
  margin: 0px;
  margin-bottom: 25px;
  margin-right: auto;
`;

export const Label = Styled.label`
  color: ${props => props.theme.global.main.colorFontNormal};
  font-family: ${props => props.theme.global.main.fontNormal};
  font-size: 13px;
  font-weight: 600;
`;

export const Field = Styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 15px;
`

export const FileContainer = Styled.div`
  margin: 10px 0px;
  width: 100%;
  overflow-y: auto;
  max-height: 110px;
`;

export const FileBox = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
`;

export const FileContent = Styled.div``

export const ExcludeIcon = Styled.div`
  width: 26px;
  height: 26px;
  cursor: pointer
  object-fit: contain;
`;

export const FileName = Styled.p`
  color: ${props => props.theme.global.main.colorFontNormal};
  width: 136px;
  font-family: ${props => props.theme.global.main.fontNormal};
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const FileDateTime = Styled.p`
  color: ${props => props.theme.global.main.colorFontSecondary};
  font-family: ${props => props.theme.global.main.fontNormal};
  font-size: 12px;
  font-weight: 600;
`;

export const ResponseFileStatus = Styled.p`
  margin-top: 15px;
  color: ${props => props.theme.global.main.colorFontNormal};
  width: 136px;
  font-family: ${props => props.theme.global.main.fontNormal};
  font-size: 16px;
  font-weight: 600;
`;

