/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { storiesOf } from "@storybook/react";
import Badge from "../src/components/Badge";
import checked from "../src/components/Icons/checked";

storiesOf("Badge")
  .add("Commom", () => <Badge>Primary</Badge>)
  .add("With danger text", () => (
    <Badge width="200px" dangerText="Error">
      Deu ruim
    </Badge>
  ))
  .add("With a random icon", () => (
    <Badge IconColor="#008140" Icon={checked}>
      Checkado!
    </Badge>
  ))
  .add("With a random icon and color", () => (
    <Badge
      IconColor="#008140"
      color="#008140"
      background="black"
      Icon={checked}
    >
      Cores diferentes
    </Badge>
  ));
