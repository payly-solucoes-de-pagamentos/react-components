import styled from "styled-components";
import theme from "../../styles/theme";
import { flexPosition, fontStyle } from "../../styles/mixins";
import { GRAY_MEDIUM } from "../../styles/variables";

export const MainButton = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${theme.button.backgroundMain};
  border: ${theme.button.borderMain || "0px"};
  border-radius: ${theme.button.radius};
  ${fontStyle(
    theme.button.colorFontMain,
    theme.button.fontSize,
    theme.text.fontWeight
  )}
  cursor: pointer;
  ${flexPosition("center", "center")}
  padding: 0px 20px 0px 20px;
  min-width: 130px;
  transition: all 0.2s ease;
  svg {
    max-height: 25px;
    max-width: 25px;
    g {
      transition: all 0.2s ease;
    }
  }

  :focus {
    outline:0;
    box-shadow: 0 0 2pt 2pt rgba(100,100,100,0.2);
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${GRAY_MEDIUM};
    ${fontStyle("#FFF")}
    background-color: ${theme.button.colorBackgroundDisabled};
    font-weight: 600;
  }

  &:hover:enabled {
    border-color: transparent;
    background: ${theme.button.backgroundMainHover};
    color: ${theme.button.colorFontMainHover};
    svg > * {
      stroke: ${theme.button.colorFontMainHover};
    }
  }
`;

export const SecondaryButton = styled(MainButton)`
  font-size: 15px;
  background: ${theme.button.backgroundSecondary};
  color: ${theme.button.colorFontSecondary};
  border: ${theme.button.borderSecondary || "0px"};

  svg > * {
    stroke: ${theme.button.colorFontSecondary};
  }
`;

export const IconButton = styled.img`
  width: 30px;
  height: 30px;
  padding-right: 10px;
`;

export const FileButton = styled.label`
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props =>
    props.isSecondary
      ? theme.button.backgroundSecondary
      : theme.button.backgroundMain};
  border: ${props =>
    props.isSecondary ? theme.button.borderSecondary : theme.button.borderMain};
  border-radius: ${theme.button.radius};
  ${props =>
    fontStyle(
      props.isSecondary
        ? theme.button.colorFontSecondary
        : theme.button.colorFontMain,
      props.fontSize,
      props.fontWeight
    )}
  cursor: pointer;
  ${flexPosition("center", "center")}
  padding: 0px 20px 0px 20px;
  min-width: 120px;
  transition: all 0.2s ease;
  flex: 1;
  ${props => {
    if (props.disabled) {
      return `
        cursor: not-allowed;
        border-color: ${GRAY_MEDIUM};
        ${fontStyle("#FFF")}
        background-color: ${theme.button.colorBackgroundDisabled};
        font-weight: 600;
        border: 0;
      `;
    }
    return `
        &: hover {
          background: ${theme.button.backgroundMainHover};
          color: ${theme.button.colorFontMainHover};
        }
      `;
  }}
`;

export const HiddenInput = styled.input`
  display: none !important;
`;
