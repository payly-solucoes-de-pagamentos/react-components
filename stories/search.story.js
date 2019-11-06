import React, { useContext } from 'react';
import SearchBar from '../src/components/Search';
import { storiesOf } from "@storybook/react";

storiesOf("SearchBar")
  .add("Default", () => <SearchBar />)
  .add("With placeholder", () => {
    return (<SearchBar
      placeholder="Busque pelo nome de uma campanha"
      loading={true}
      filter={'2342'}
    />);
  });
