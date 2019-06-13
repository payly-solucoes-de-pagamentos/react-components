import React, { useState, useEffect, useCallback } from "react";
import PropType from "prop-types";
import * as Styled from "./style";
import {
  TableRows,
  loaderHolder,
  emptyHolder,
  emptyFilteredHolder
} from "./body";
import { headersToComponent, actionHeader } from "./header";

/* FORMAT OF DATA PARAM:
*
* [
*   {
*     [header]: {
                  value: String | Integer | Date...,
                  isSortable: Boolean,
                  sortStrategy: Function,
                  component: Function (React Component),
                },
*   }
* ]
*/
const Table = React.memo(
  ({
    data,
    striped,
    translateEnum,
    ActionComponent,
    TableEmptyComponent,
    EmptyFilteredComponent,
    filtered,
    width,
    loading,
    sorts
  }) => {
    const [tableData, setTableData] = useState(data);
    const [sortedBy, setSortedBy] = useState(undefined);

    useEffect(() => {
      setTableData(data);
    }, [data]);

    const headersComponents = headersToComponent(
      tableData,
      translateEnum,
      sorts,
      setTableData,
      setSortedBy,
      sortedBy
    );
    const headersCount =
      Object.keys(translateEnum).length + (ActionComponent ? 1 : 0);
    const isEmpty = !tableData.length;
    const emptyHolderHandler = filtered
      ? emptyFilteredHolder(EmptyFilteredComponent, headersCount)
      : emptyHolder(TableEmptyComponent, headersCount);

    return (
      <Styled.Container>
        <Styled.CustomTable width={width}>
          {loading && loaderHolder(loading.text, isEmpty)}
          <Styled.TableHead show={!isEmpty}>
            <Styled.TableHeadRow>
              {headersComponents}
              {ActionComponent && actionHeader()}
            </Styled.TableHeadRow>
          </Styled.TableHead>
          <Styled.TableBody>
            {isEmpty && emptyHolderHandler}
            <TableRows
              data={tableData}
              ActionComponent={ActionComponent}
              string={striped}
              loading={loading}
              sortedBy={sortedBy}
            />
          </Styled.TableBody>
        </Styled.CustomTable>
      </Styled.Container>
    );
  }
);

Table.propTypes = {
  data: PropType.arrayOf(PropType.object),
  striped: PropType.bool,
  translateEnum: PropType.object.isRequired,
  ActionComponent: PropType.func,
  TableEmptyComponent: PropType.func,
  EmptyFilteredComponent: PropType.func,
  width: PropType.string,
  loading: PropType.object,
  filtered: PropType.bool,
  sorts: PropType.object
};

Table.defaultProps = {
  data: [],
  striped: true,
  translateEnum: {},
  filtered: false
};

export default Table;
