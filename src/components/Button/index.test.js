import React from "react";
import { shallow, render, mount } from "enzyme";
import Button from "./index";
import theme from "../../styles/theme";

describe("Button tests", () => {
  it("should render the main button", () => {
    const wrapper = shallow(<Button>Render</Button>);
    expect(wrapper).toExist();
  });

  it("should render children", () => {
    const wrapper = render(<Button>Render</Button>);
    expect(wrapper.html()).toBe("Render");
  });

  // describe("Style", () => {
  //   it(`It should have bancground color: ${theme.button.backgroundMain} when main`, () => {
  //     const wrapper = mount(<Button>Render</Button>);

  //   });
  // });
});
