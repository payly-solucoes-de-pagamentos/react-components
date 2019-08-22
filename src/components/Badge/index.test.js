import React from "react";
import { shallow, render, mount } from "enzyme";
import Badge from "./index";

describe("Badge component", () => {
  it("should render the main button", () => {
    const wrapper = shallow(<Badge background="red">Render</Badge>);
    expect(wrapper).toExist();
  });
});
