import React from 'react';
import { mount, shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import theme from '../../styles/theme';

import Toast from './index';

global.window.scrollTo = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

const onCloseEvent = jest.fn();

describe('Toast component', () => {
  it('should render', () => {
    const wrapper = shallow(<Toast closeAction={onCloseEvent}>Teste</Toast>);
    expect(wrapper).toExist();
  });

  describe('Service behavior', () => {
    it('should execute the callback when click on close icon', () => {
      const wrapper = shallow(
        <Toast isActive closeAction={onCloseEvent}>
          Teste
        </Toast>
      );

      wrapper.find('CloseButton').simulate('click');
      expect(onCloseEvent).toHaveBeenCalled();
    });

    it("should execute the callback alone with it's own timeout", done => {
      shallow(
        <Toast isActive closeAction={onCloseEvent} timer={1}>
          Teste
        </Toast>
      );

      setTimeout(() => {
        expect(onCloseEvent).toHaveBeenCalled();
        done();
      }, 2);
    }, 3010);

    it('should have the following default prop-types ', () => {
      const wrapper = mount(<Toast closeAction={onCloseEvent}>Teste</Toast>);
      expect(wrapper.props().active).toBeFalsy();
      expect(wrapper.props().Icon).toBeFalsy();
      expect(wrapper.props().timer).toBe(3000);
    });

    it('should receive the required props from instance', () => {
      const wrapper = mount(<Toast closeAction={onCloseEvent}>Teste</Toast>);
      expect(wrapper.props().children).toBe('Teste');
      expect(wrapper.props().closeAction).toBe(onCloseEvent);
    });
  });

  describe('Style of toast', () => {
    it(`should render with default props and style`, () => {
      const wrapper = shallow(
        <Toast closeAction={onCloseEvent} timer={1}>
          Teste
        </Toast>
      );

      expect(wrapper.find('Container').prop('color')).toEqual(
        theme.successColor
      );

      const wrapperJson = toJson(wrapper.find('Container').render());
      expect(wrapperJson).toHaveStyleRule('background', theme.successColor);
      expect(wrapperJson).toHaveStyleRule('transform', 'translateY(-100px)');
    });
  });
});
