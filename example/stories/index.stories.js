import React from "react";
import { storiesOf } from "@storybook/react";
import Styled from "styled-components";
import { Modal, Checkbox } from "payly-components";


const Pzinho = Styled.p`
  text-align: center;
`;

storiesOf("teste", module)
  .add("testeDoAdd", () => (
    <Modal active ContentComponent={() => <Pzinho>Modal 1</Pzinho>} />
  ))
  .add("testeDoAdd2", () => (
    <Checkbox />
  ));

