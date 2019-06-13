import React from 'react';
import PropTypes from 'prop-types';
import { GRAY_DARKER, GRAY_MEDIUM, FONT_SIZE_5, FONT_WEIGHT_BOLD, MAIN_COLOR } from '../../styles/variables';
import ArrowFilled from '../../components/Icons/arrow-filled';
import * as Styles from './styles';

const PaginationNavComponent = (props) => {
  const {
    width,
    height,
    totalPageNumber,
    activePage,
    onPageChange,
    onPrevPage,
    onNextPage
  } = props;
  const renderPageNumbers = (totalPageNumber) => {
    const range = Array.from({length: totalPageNumber}, (v, k) => k);
    const isActivePage = (currentPage, index) => currentPage === index;
    const isFirstPage = activePage === 1;
    const isLastPage = activePage === Number(totalPageNumber);

    return (
      <Styles.PagesWrapper>
        <Styles.ArrowButton onClick={onPrevPage}>
          <ArrowFilled width="17px" height="17px" color={ !isFirstPage ? MAIN_COLOR : GRAY_MEDIUM} position='left'></ArrowFilled>
        </Styles.ArrowButton>
        {
          range.map((index) => {
            const page = index+1;
            return <Styles.PageNumber
                      active={isActivePage(activePage, page)}
                      key={index}
                      onClick={(e) => onPageChange(e, page)}
                    >
                      {page}
                    </Styles.PageNumber>
          })
        }
        <Styles.ArrowButton onClick={onNextPage}>
          <ArrowFilled width="17px" height="17px" color={ !isLastPage ? MAIN_COLOR : GRAY_MEDIUM} position='right'></ArrowFilled>
        </Styles.ArrowButton>
      </Styles.PagesWrapper>
    )
  }

  return (
    <Styles.PaginationContainer width={width} height={height}>
      {renderPageNumbers(totalPageNumber)}
    </Styles.PaginationContainer>
  );
};

PaginationNavComponent.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  onPageChange: PropTypes.func.isRequired,
  onNextPage: PropTypes.func.isRequired,
  onPrevPage: PropTypes.func.isRequired,
  type: PropTypes.string,
  outline: PropTypes.bool,
  disabled: PropTypes.bool,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.any,
  borderColor: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  totalPageNumber: PropTypes.number.isRequired,
  activePage: PropTypes.number
};

PaginationNavComponent.defaultProps = {
  id: '',
  type: 'button',
  children: 'Botão',
  disabled: false,
  outline: false,
  bgColor: 'transparent',
  width: 'auto',
  height: '50px',
  color: GRAY_DARKER,
  borderColor: GRAY_MEDIUM,
  icon: null,
  fontSize: FONT_SIZE_5,
  fontWeight: FONT_WEIGHT_BOLD,
  totalPageNumber: 1,
  activePage: 1,
};

export default PaginationNavComponent;


