import React, { useState } from "react";
import * as Styled from "./style";
import SentFeedback from "../SentFeedback";
import { stringLimitator } from "../../helpers";

export const TableRows = ({
  data, ActionComponent, striped, loading, onRowClick,
}) => {
  return (
    <>
      {data.map((info, i) => (
        <TableRow
          info={info}
          index={i}
          ActionComponent={ActionComponent}
          striped={striped}
          loading={loading}
          onRowClick={onRowClick}
          key={`parent-row-${i}`}
        />
      ))}
    </>
  );
};

export const TableRow = ({
  info,
  ActionComponent,
  loading,
  striped,
  onRowClick,
  index
}) => {
  const [isMouseOnRow, setMouseOnRow] = useState(false);
  return (
    <Styled.TableRow
      className="pc-table-body-row"
      loading={loading}
      striped={striped}
      key={`row-${index}`}
      onMouseEnter={() => setMouseOnRow(true)}
      onMouseLeave={() => setMouseOnRow(false)}
    >
      {Object.keys(info).map(
        infoKey =>
          !info[infoKey].hidden && (
            <TableCell
              key={`row-cell-${infoKey}`}
              cell={info[infoKey]}
              info={info}
              index={infoKey}
              onRowClick={onRowClick}
            />
          )
      )}

      {ActionComponent && (
        <TableCellAction
          ActionComponent={ActionComponent}
          isMouseOnRow={isMouseOnRow}
          index={index}
          data={info}
        />
      )}
    </Styled.TableRow>
  );
};

export const TableCellAction = React.memo(
  ({ ActionComponent, index, isMouseOnRow, data }) => {
    return (
      <Styled.TableCell
        className="pc-table-body-cell"
        key={`body-${index}-action`}
        textAlign="center"
      >
        <ActionComponent
          key={`action-row-${index}`}
          isOpen={isMouseOnRow}
          data={data}
        />
      </Styled.TableCell>
    );
  }
);

export const TableCell = ({ info, cell, index, onRowClick }) => {
  const Component = cell.component;

  return (
    <Styled.TableCell
      className="pc-table-body-cell"
      key={`body-${index}-${cell.value}`}
      onClick={() => onRowClick(info)}
      cursorPointer={onRowClick.toString().substr(-2) !== '{}'}
    >
      {Component ? (
        <Component />
      ) : typeof cell.value === "string" ? (
        stringLimitator(cell.value, 23)
      ) : (
        cell.value
      )}
    </Styled.TableCell>
  );
};

export const loaderHolder = (loadingText, isEmpty) => {
  return (
    <Styled.LoadingTableContent hasHeader={!isEmpty}>
      <tr>
        <Styled.TableCell className="pc-table-loader" textAlign="center">
          <SentFeedback size="42px" strokeWidth="7" />{" "}
          <span>{loadingText}</span>
        </Styled.TableCell>
      </tr>
    </Styled.LoadingTableContent>
  );
};

export const emptyHolder = (TableEmptyComponent, headerSize) => {
  return (
    <Styled.TableRow>
      <Styled.DefaultEmptyTableCell colSpan={headerSize}>
        {TableEmptyComponent ? (
          <TableEmptyComponent />
        ) : (
          "Nenhum registro encontrado."
        )}
      </Styled.DefaultEmptyTableCell>
    </Styled.TableRow>
  );
};

export const emptyFilteredHolder = (EmptyFilteredComponent, headerSize) => {
  return (
    <Styled.TableRow>
      <Styled.DefaultEmptyTableCell colSpan={headerSize}>
        {EmptyFilteredComponent ? (
          <EmptyFilteredComponent />
        ) : (
          "Não foram encontrados resultados para o(s) filtro(s) aplicado(s)."
        )}
      </Styled.DefaultEmptyTableCell>
    </Styled.TableRow>
  );
};
