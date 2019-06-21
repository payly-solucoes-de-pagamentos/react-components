/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { storiesOf } from "@storybook/react";
import Label from "../src/components/Label";
import checked from "../src/components/Icons/checked";

storiesOf("Label")
  .add("Commom", () => <Label>Primary</Label>)
  .add("With danger text", () => (
    <Label width="200px" dangerText="Error">
      Deu ruim
    </Label>
  ))
  .add("With a random icon", () => (
    <Label IconColor="#008140" Icon={checked}>
      Checkado!
    </Label>
  ));
