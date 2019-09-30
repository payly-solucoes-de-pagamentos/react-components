import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HorizontalLoader from './index';

describe('Horizontal Loader component', () => {
  it('should render the main HorizontalLoader', () => {
    const wrapper = shallow(<HorizontalLoader />);
    expect(wrapper).toExist();
  });

  describe('Component style', () => {
    it('should have height equals 3px', () => {
      const wrapper = shallow(<HorizontalLoader height="3px" />);
      const horizontalLoader = toJson(wrapper.find('InternalLoader').render());
      expect(horizontalLoader).toHaveStyleRule('height', '3px');
    });
  });
});
