import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Badge from './index';

describe('Badge component', () => {
  it('should render the main badge', () => {
    const wrapper = shallow(<Badge background="red">Render</Badge>);
    expect(wrapper).toExist();
  });
  it('should render children text inside Text component', () => {
    const wrapper = shallow(<Badge>Render</Badge>);
    expect(wrapper.find('Badge').text()).toBe('Render');
  });

  describe('Component colors', () => {
    it('should have background color', () => {
      const wrapper = shallow(<Badge background="red">Render</Badge>);
      const badge = toJson(wrapper.find('Badge').render());
      expect(badge).toHaveStyleRule('background', 'red');
    });
    it('should have text color', () => {
      const wrapper = shallow(<Badge color="red">Render</Badge>);
      const badge = toJson(wrapper.find('Badge').render());
      expect(badge).toHaveStyleRule('color', 'red');
    });
  });
});
