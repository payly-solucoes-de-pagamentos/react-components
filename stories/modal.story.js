import React from "react";
import { storiesOf } from "@storybook/react";
import Styled from "styled-components";
import Modal from "../src/components/Modal";

const Pzinho = Styled.p`
  text-align: center;
`;

storiesOf("Modal", module).add("testeDoAdd", () => (
  <Modal active>
    <Pzinho>Modal 1</Pzinho>
  </Modal>
));
