import styled from "styled-components";

export const BackgroundOverlay = styled.div`
  position: fixed;
  display: flex;
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 10002;
  background: rgba(0, 0, 0, 0.6);
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: visibility 0.2s ease, opacity 0.3s ease;
`;
export const ModalContainer = styled.div`
  justify-self: center;
  width: ${props => props.width};
  height: ${props => props.height};
  background: #fff;
  border-radius: 3px;
  z-index: 10003;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.05);
`;
