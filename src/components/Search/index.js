import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './style';
import { GRAY_DARKER } from '../../styles/variables';
import SearchIcon from '../Icons/search';
import HorizontalLoader from '../HorizontalLoader';
import searchHandler from './handler';

const SearchComponent = memo(({ placeholder, onChange, filter, loading }) => {
  const searchFn = useMemo(() => searchHandler(onChange), []);

  const inputChangeHandler = (e) => {
    const { value } = e.target;
    if (value.length > 2) {
      searchFn.resetTime(value);
    } else {
      searchFn.clearTime();
      if (filter) {
        onChange();
      }
    }
  };

  return (
    <Styled.Container>
      <Styled.InputWrapper>
        <Styled.Input placeholder={placeholder} onChange={inputChangeHandler} />
        <Styled.IconWrapper>
          <SearchIcon color={GRAY_DARKER} size="15px" />
        </Styled.IconWrapper>
        {loading && filter && (
          <Styled.LoaderWrapper>
            <HorizontalLoader height="3px" />
          </Styled.LoaderWrapper>
        )}
      </Styled.InputWrapper>
    </Styled.Container>
  );
});

SearchComponent.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  loading: PropTypes.bool,
  filter: PropTypes.string,
};

SearchComponent.defaultProps = {
  placeholder: 'Buscar',
  onChange: () => { },
  loading: false,
  filter: '',
};

export default SearchComponent;
