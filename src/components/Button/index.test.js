import React from "react";
import { mount, shallow, render } from "enzyme";
import toJson from "enzyme-to-json";
import Button from "./index";
import theme from "../../styles/theme";

const src = "../../images/icon/sucess.svg";

const fileCharacteristic = {
  id: "testezin",
  multiple: false,
  name: "teste",
  onChange: e => {
    console.log("FILE => ", e.target.value);
  }
};

describe("Button tests", () => {
  it("should render the main button", () => {
    const wrapper = shallow(<Button onClick={() => {}}>Testado</Button>);
    expect(wrapper).toExist();
  });

  it("should call onClick function", () => {
    const cb = jest.fn();
    const wrapper = mount(<Button onClick={cb}>Testado</Button>);
    wrapper.simulate('click');
    expect(cb).toHaveBeenCalled();
  });

  it("should render children", () => {
    const wrapper = render(<Button onClick={() => {}}>Testado</Button>);
    expect(wrapper.html()).toBe("Testado");
  });

  describe("Style", () => {
    it(`should have background color: ${theme.button.backgroundMain} when primarry`, () => {
      const tree = render(<Button onClick={() => {}}>Testado</Button>);
      expect(toJson(tree)).toHaveStyleRule(
        "background",
        theme.button.backgroundMain
      );
    });

    it(`should have background color: ${theme.button.backgroundSecondary} when secondary`, () => {
      const tree = render(
        <Button isSecondary onClick={() => {}}>
          Testado
        </Button>
      );
      expect(toJson(tree)).toHaveStyleRule(
        "background",
        theme.button.backgroundSecondary
      );
    });
  });
  describe("Disabled input", () => {
    it("disabled button should not call onClick function", () => {
      const cb = jest.fn();
      const wrapper = mount(
        <Button disabled onClick={cb}>
          Testado
        </Button>
      );

      wrapper.simulate('click');

      expect(cb).not.toHaveBeenCalled();
    });
  });

  describe("Children", () => {
    it("should render icon when it has", () => {
      const wrapper = shallow(
        <Button onClick={() => {}} icon={src}>
          Testado
        </Button>
      );
      expect(wrapper.find("IconButton")).toExist();
    });

    it("should render icon with text ", () => {
      const wrapper = shallow(
        <Button onClick={() => {}} icon={src}>
          Testado
        </Button>
      );
      expect(wrapper.children().length).toEqual(2);
    });

    it(`should insert ${src} into src of icon`, () => {
      const wrapper = shallow(
        <Button onClick={() => {}} icon="../../images/icon/sucess.svg">
          Testado
        </Button>
      );
      expect(wrapper.find("IconButton").props().src).toEqual(src);
    });
  });

  describe("Button with type input", () => {
    it('should have type "FileButton"', () => {
      const wrapper = shallow(
        <Button fileCharacteristic={fileCharacteristic} onClick={() => {}}>
          Testado
        </Button>
      );
      expect(wrapper.dive().find("FileButton")).toExist();
    });

    it('should have children "HiddenInput" with type "file"', () => {
      const wrapper = shallow(
        <Button fileCharacteristic={fileCharacteristic} onClick={() => {}}>
          Testado
        </Button>
      );
      expect(wrapper.dive().find("HiddenInput")).toExist();
      expect(
        wrapper
          .dive()
          .find("HiddenInput")
          .render()
          .get(0).attribs.type
      ).toBe("file");
    });
  });
});
