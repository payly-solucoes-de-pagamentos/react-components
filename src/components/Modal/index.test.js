import React from "react";
import { shallow } from "enzyme";

import Modal from "./index";

describe("Modal component", () => {
  it("Render Modal", () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper).toExist();
  });

  it("should render element children", () => {
    const wrapper = shallow(
      <Modal>
        <p>Teste</p>
      </Modal>
    );
    expect(wrapper).toContainExactlyOneMatchingElement("p");
  });

  it("should be openned when pass active prop", () => {
    const wrapper = shallow(<Modal active />);

    expect(wrapper.find("styles__BackgroundOverlay")).toHaveProp({
      isOpen: true
    });
  });

  describe("Background overlay", () => {
    it("should be unique", () => {
      const wrapper = shallow(<Modal />);

      expect(wrapper.find("styles__BackgroundOverlay").length).toBe(1);
    });

    it("should start with closed", () => {
      const wrapper = shallow(<Modal />);

      expect(wrapper.find("styles__BackgroundOverlay")).toHaveProp({
        isOpen: false
      });
    });

    it("should close Modal on click", () => {
      const wrapper = shallow(<Modal />);

      wrapper.find("styles__BackgroundOverlay").simulate("click", {
        preventDefault: () => {},
        target: {
          id: {
            includes: () => true
          }
        }
      });

      expect(
        wrapper.find("styles__BackgroundOverlay").prop("isOpen")
      ).toBeFalsy();
    });
  });
});
