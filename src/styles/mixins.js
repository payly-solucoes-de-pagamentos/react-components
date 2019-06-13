import { BORDER_RADIUS, GRAY_LIGHTER, GRAY_LIGHT, FONT_SIZE_5 } from "./variables";

export const inputDefault = (props) => `

`;

export const inputIcon = () => `
  position: absolute;
  width: 21px;
  height: 21px;
  top: 23px;
  left: 10px;
`;

export const inputIconContainer = (props) => `
  width: ${props.width || '0'};
  position: relative;
  display: inline-block;
`;

export const container = () => `
  width: 100%;
  height: auto;
  max-width: 1110px;
  margin: 0px auto;
`;

export const flexColumn = () => `
  display: flex;
  flex-direction: column;
`;

export const flexPosition = (align, justify) => `
  display: flex;
  align-items: ${align || 'center'};
  justify-content: ${justify || 'center'};
`;

export const footerSpacing = () => `
  padding-bottom: 85px;
`;

export const fontStyle = (color, fontSize, fontWeight) => `
  ${color ? `color: ${color};` : ''}
  ${fontSize ? `font-size: ${fontSize};` : ''}
  ${fontWeight ? `font-weight: ${fontWeight};` : ''}
`;

export const box = ({ width = 360, height = 500 }) => `
  width: ${width}px;
  height: ${height}px;
  border-radius: 3px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
  background-color: #FFF;
`;

export const column = () => `
  flex: ${props => props.large ? 2 : 1};
  padding-top: 20px;
  height: auto;
`;
