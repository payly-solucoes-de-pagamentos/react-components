import React from 'react';
import { mount, shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import theme from '../../styles/theme';

import RadioButton from '.';

describe('RadioButton component', () => {
  it('should exist', () => {
    const wrapper = shallow(
      <RadioButton name="wow" value="wow">
        Teste
      </RadioButton>
    );

    expect(wrapper).toExist();
  });

  describe('Component structure', () => {
    it('should have a container', () => {
      const wrapper = shallow(
        <RadioButton name="wow" value="wow">
          Teste
        </RadioButton>
      );

      expect(wrapper.find('Container')).toExist();
    });

    it('should have a Styled Radio input', () => {
      const wrapper = shallow(
        <RadioButton name="wow" value="wow">
          Teste
        </RadioButton>
      );

      expect(wrapper.find('RadioInput')).toExist();
    });

    it('should have a Styled Radio Button', () => {
      const wrapper = shallow(
        <RadioButton name="wow" value="wow">
          Teste
        </RadioButton>
      );

      expect(wrapper.find('RadioHolder')).toExist();
    });

    it('should have a space for text', () => {
      const wrapper = shallow(
        <RadioButton name="wow" value="wow">
          Teste
        </RadioButton>
      );

      expect(wrapper.find('Text')).toExist();
    });
  });

  describe('Radio style', () => {
    it('should have a radio input without display', () => {
      const wrapper = shallow(
        <RadioButton name="wow" value="wow">
          Teste
        </RadioButton>
      );

      const radioButtonJson = toJson(wrapper.find('RadioInput').render());

      expect(wrapper.find('RadioInput').prop('type')).toBe('radio');
      expect(radioButtonJson).toHaveStyleRule('display', 'none');
    });

    it('should have a label with radius and background with color white', () => {
      const wrapper = shallow(
        <RadioButton name="wow" value="wow">
          Teste
        </RadioButton>
      );

      const radioButtonJson = toJson(wrapper.find('RadioHolder').render());

      expect(wrapper.find('Box').type().target).toBe('label');
      expect(wrapper.find('Box').type().target).not.toBe('div');
      expect(radioButtonJson).toHaveStyleRule('border-radius', '35px');
      expect(radioButtonJson).toHaveStyleRule('background', 'white');
      expect(radioButtonJson).toHaveStyleRule('display', 'block');
    });

    test('RadioHolder must have for attribute with same string as RadioInput', () => {
      const wrapper = shallow(
        <RadioButton name="wow" identifier="idTest" value="wow">
          Teste
        </RadioButton>
      );

      const BoxHtmlFor = wrapper
        .find('Box')
        .render()
        .get(0).attribs.for;
      const RadioInputId = wrapper.find('RadioInput').prop('id');

      expect(BoxHtmlFor).not.toBe(undefined);
      expect(RadioInputId).not.toBe(undefined);
      expect(BoxHtmlFor === RadioInputId).toBe(true);
    });

    it('should render children inside Text component', () => {
      const wrapper = mount(
        <RadioButton name="wow" value="wow">
          Teste
        </RadioButton>
      );

      expect(wrapper.find('Text').text()).toBe('Teste');
    });

    it('should render children inside Text component', () => {
      const wrapper = mount(
        <RadioButton name="wow" identifier="idTest" value="wow">
          <span>Woow</span>
        </RadioButton>
      );

      expect(
        wrapper.find('Text').containsMatchingElement(<span>Woow</span>)
      ).toBe(true);
    });
  });
  describe('Behavior block', () => {
    it(`should change background of RadioHolder to ${theme.secondColor} when Radio is checked`, () => {
      const wrapper = mount(
        <RadioButton name="wow" identifier="idTest" value="wow">
          Teste
        </RadioButton>
      );

      wrapper
        .find('RadioInput')
        .simulate('change', { target: { checked: true } });

      console.log('\n\n ======================');
      console.log(toJson(wrapper.find('RadioInput').render()));

      const wrapperToJson = toJson(wrapper.find('RadioHolder').render());
      expect(wrapperToJson).toHaveStyleRule('background', theme.secondColor);
    });
  });
});
