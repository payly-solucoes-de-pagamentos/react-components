import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Search from './index';

describe('Search Loader component', () => {
  it('should render the main HorizontalLoader', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toExist();
  });

  describe('Component style', () => {
    it('should with styeled on InputWrapper components ', () => {
      const wrapper = shallow(<Search />);
      const InputWrapper = toJson(wrapper.find('InputWrapper').render());
      expect(InputWrapper).toHaveStyleRule('position', 'relative');
      expect(InputWrapper).toHaveStyleRule('width', '100%');
      expect(InputWrapper).toHaveStyleRule('height', '45px');
    });
    it('should with styeled on input components ', () => {
      const wrapper = shallow(<Search />);
      const Input = toJson(wrapper.find('Input').render());
      expect(Input).toHaveStyleRule('width', '100%');
      expect(Input).toHaveStyleRule('height', '100%');
      expect(Input).toHaveStyleRule('background', 'transparent');
      expect(Input).toHaveStyleRule('padding', '0px 30px');
      expect(Input).toHaveStyleRule('object-fit', 'contain');
      expect(Input).toHaveStyleRule('border', 'solid 1px #e4e4e4');
      expect(Input).toHaveStyleRule('border-radius', '27.5px');
    });
    it('should with styeled on IconWrapper components ', () => {
      const wrapper = shallow(<Search />);
      const IconWrapper = toJson(wrapper.find('IconWrapper').render());
      expect(IconWrapper).toHaveStyleRule('position', 'absolute');
      expect(IconWrapper).toHaveStyleRule('width', '15px');
      expect(IconWrapper).toHaveStyleRule('height', '15px');
      expect(IconWrapper).toHaveStyleRule('top', '15px');
      expect(IconWrapper).toHaveStyleRule('right', '30px');
    });
    it('should with styeled on LoaderWrapper components ', () => {
      const wrapper = shallow(<Search loading={true} filter='teste' />);
      const IconWrapper = toJson(wrapper.find('LoaderWrapper').render());
      expect(IconWrapper).toHaveStyleRule('position', 'absolute');
      expect(IconWrapper).toHaveStyleRule('width', '100%');
      expect(IconWrapper).toHaveStyleRule('bottom', '2px');
      expect(IconWrapper).toHaveStyleRule('overflow', 'hidden');
      expect(IconWrapper).toHaveStyleRule('padding', '0px 30px');
    });
  });

  describe('Component behavior', () => {
    it('Input behavior props placeholder  default', () => {
      const wrapper = shallow(<Search />);
      const Input = wrapper.find('Input');
      expect(Input.prop('placeholder')).toEqual('Buscar');
    });

    it('Input behavior props placeholder ', () => {
      const wrapper = shallow(<Search placeholder="teste" />);
      const Input = wrapper.find('Input');
      expect(Input.prop('placeholder')).toEqual('teste');
    });

    it('Input behavior props placeholder  loading', () => {
      const wrapper = shallow(<Search loading={true} filter='teste' />);
      const Input = wrapper.find('LoaderWrapper');
      expect(Input).toExist();
    });
  });
});
