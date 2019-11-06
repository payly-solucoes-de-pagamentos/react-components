import React from "react";
import * as Styled from "./style";
import SortIndicatorIcon from "../Icons/sort-indicators";

export const headersToComponent = (
  data,
  translateEnum,
  sorts,
  setTableData,
  setSortedBy,
  sortedBy
) => {
  let dataSample = data.length && data[0];
  dataSample = Object.keys(dataSample).filter(
    datakey => translateEnum[datakey]
  );

  const sortData = dataKey => {
    const handlerData = [...data];
    sortedBy === dataKey
      ? setTableData(handlerData.reverse())
      : setTableData(data.sort(sorts[dataKey].sortStrategy));
    setSortedBy(dataKey);
  };

  if (dataSample) {
    return dataSample.map((dataKey, i) => (
      <Styled.TableTitle
        className="pc-table-head-cell"
        key={`header-${i}-${translateEnum[dataKey] || dataKey}`}
        width={translateEnum[dataKey].width || "15%"}
        onClick={() => sortData(dataKey)}
        isSortable={!!sorts[dataKey]}
      >
        {translateEnum[dataKey].value}
        {!!sorts[dataKey] && <SortIndicatorIcon size="14px" />}
      </Styled.TableTitle>
    ));
  }
};

export const actionHeader = () => {
  return (
    <Styled.TableTitle
      className="pc-table-action"
      width="80px"
      padding="12px"
      key="action-header"
    >
      Ações
    </Styled.TableTitle>
  );
};
