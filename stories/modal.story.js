import React from "react";
import { storiesOf } from "@storybook/react";
import Styled from "styled-components";
import Modal from "../src/components/Modal";

const Text = Styled.p`
  text-align: center;
`;

storiesOf("Modal", module)
  .add("Default", () => (
    <Modal active>
      <Text>Modal 1</Text>
    </Modal>
  )).add("With backdrop false", () => (
    <Modal active backdrop={false}>
      <Text>Modal </Text>
    </Modal>
  ));
