import React from "react";
import { shallow, render, mount } from "enzyme";
import Label from "./index";

describe("Label component", () => {
  it("should render the main button", () => {
    const wrapper = shallow(<Label background="red">Render</Label>);
    expect(wrapper).toExist();
  });
});
