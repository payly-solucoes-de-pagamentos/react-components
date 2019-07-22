import React from 'react';
import { mount, shallow, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import Table from './index';
import { tableMock, HEADERS_TABLE } from '../../../__MOCKS__/Table';
import {
  sorts,
  parseLotsToDataTable,
  ActionComponent,
} from '../../../__MOCKS__/Table/helpers';

describe('Table component', () => {
  it('should render normal', () => {
    const wrapper = shallow(
      <Table
        data={parseLotsToDataTable(tableMock)}
        translateEnum={HEADERS_TABLE}
      />
    );
    expect(wrapper).toExist();
  });

  describe('Function parseLotsToDataTable returns', () => {
    it('should return empty array when no pass void param', () => {
      const content = parseLotsToDataTable();
      expect(Array.isArray(content)).toBe(true);
    });

    it('should return empty array when no pass void param', () => {
      const content = parseLotsToDataTable();
      expect(content.length === 0).toBe(true);
    });

    it('should fill and not null', () => {
      const content = parseLotsToDataTable(tableMock);
      const isAllFilled = content.every(item => {
        return Object.keys(item).every(row => item[row]);
      });

      expect(isAllFilled).toBeTruthy();
    });
  });

  describe('Table with simplest content', () => {
    it('should render 8 rows with data', () => {
      const wrapper = shallow(
        <Table
          data={parseLotsToDataTable(tableMock)}
          translateEnum={HEADERS_TABLE}
        />
      );

      expect(
        wrapper
          .find('TableRows')
          .dive()
          .find('TableRow').length
      ).toEqual(8);
    });
  });
});
