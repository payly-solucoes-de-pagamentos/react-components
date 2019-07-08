import React from "react";
import { storiesOf } from "@storybook/react";
import Table from "../src/components/Table";
import { tableMock, HEADERS_TABLE } from "../__MOCKS__/Table";
import {
  sorts,
  parseLotsToDataTable,
  ActionComponent
} from "../__MOCKS__/Table/helpers";

const loader = {
  text: "carregando a tabelinha",
  isEmpty: false
};

storiesOf("Table")
  .add("Normal", () => (
    <Table
      translateEnum={HEADERS_TABLE}
      data={parseLotsToDataTable(tableMock)}
    />
  ))
  .add("Empty table", () => <Table translateEnum={HEADERS_TABLE} />)
  .add("with sort", () => (
    <Table
      translateEnum={HEADERS_TABLE}
      data={parseLotsToDataTable(tableMock)}
      sorts={sorts}
    />
  ))
  .add("different style", () => (
    <Table
      translateEnum={HEADERS_TABLE}
      data={parseLotsToDataTable(tableMock)}
      striped={false}
      width="100%"
    />
  ))
  .add("table with tooltip", () => (
    <Table
      translateEnum={HEADERS_TABLE}
      data={parseLotsToDataTable(tableMock)}
      striped={false}
      ActionComponent={ActionComponent}
      width="100%"
    />
  ))
  .add("With loader", () => (
    <Table loading={loader} translateEnum={HEADERS_TABLE} />
  ));
