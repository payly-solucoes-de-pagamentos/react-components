import React, { memo, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import Switch from '../Switch';
import { STATUS_OPTIONS } from "./constants";
import Select from "../Select";
import Button from "../Button";
import RangeCalendar from '../RangeCalendar';
import { blockSetWithErrors } from './helpers';
import { setQueryString, getFiltersFromQs, getStatesFromQs } from '../../helpers/queryString';


import * as Styled from './style';

/**
 * @param {Array} arrayToTest
 */
const someNotNull = (arrayToTest) => arrayToTest && Array.from(arrayToTest).some(item => item);


const TransfersFilter = memo(({
  location,
  history,
}) => {
  const [transferStatus, setTransferStatus] = useState(null);
  const [withErrors, setWithErrors] = useState(true);
  const [initialDate, setInitialDate] = useState(null);
  const [finallDate, setFinallDate] = useState(null);
  const [submitActive, setSubmitActive] = useState(false);
  const [focusedInput, setfocusedInput] = useState(null);

  // Acumulador de status
  const allFilterStates = { transferStatus, withErrors, initialDate, finallDate, submitActive };

  const componentDidMount = useRef(false);

  // Enhancing some external functions
  const enhancedSomeNotNull = useCallback(() => someNotNull(Object.values(allFilterStates)),
    [transferStatus, initialDate, finallDate]
  );

  const enhancedBlockSetWithErrors = useCallback(
    () => {
      return blockSetWithErrors(transferStatus, [{ value: 'PROCESSING' }])
    },
    [transferStatus]
  );

  const enhancedGetFiltersFromQs = useMemo(() => getFiltersFromQs({ location, customFilterReturn: (data) => getStatesFromQs({ data, allFilterStates }) }), Object.values(allFilterStates));

  const cleanAllFilter = useCallback(() => {
    if (submitActive) {
      setTransferStatus(null);
      setWithErrors(true);
      setInitialDate(null);
      setFinallDate(null);

      setQueryString({ history, location }, {}, true);
    }
  }, [submitActive]);
  // -----------------------------



  useEffect(() => {
    if (enhancedSomeNotNull() && componentDidMount.current) {
      setSubmitActive(true);
    }
  }, Object.values(allFilterStates));

  useEffect(() => {

    if (enhancedBlockSetWithErrors()) {
      setWithErrors(false);
    }
  }, [transferStatus]);


  useEffect(() => {
    const filtersFromQueryString = enhancedGetFiltersFromQs;

    // If have some QS
    if (filtersFromQueryString) {

      const initialDateMoment = filtersFromQueryString.startDate && moment(filtersFromQueryString.startDate);
      const finallDateMoment = filtersFromQueryString.endDate && moment(filtersFromQueryString.endDate);

      setTransferStatus(filtersFromQueryString.transferStatus);
      setWithErrors(!!filtersFromQueryString.withErrors);
      setInitialDate(initialDateMoment);
      setFinallDate(finallDateMoment);
    }
    componentDidMount.current = true;
  }, []);

  const onSubmitFilter = () => {
    const queryStringData = {
      transferStatus: (transferStatus && Array.isArray(transferStatus) && transferStatus.length) ? transferStatus.map(item => item.value) : undefined,
      withErrors,
      startDate: initialDate ? initialDate.format('YYYY-MM-DD') : undefined,
      endDate: finallDate ? finallDate.format('YYYY-MM-DD') : undefined,
      page: 1,
    }

    setQueryString({ history, location }, queryStringData, true);
  }

  return (
    <Styled.Container>
      <Styled.ComponentTitleBox>
        <Styled.ComponentTitle>Filtrar</Styled.ComponentTitle>
        <Styled.CleanFiltersOpt disabled={!submitActive} onClick={cleanAllFilter} >/  Limpar filtros</Styled.CleanFiltersOpt>
      </Styled.ComponentTitleBox>
      <Styled.FilterOptBox>
        <Styled.SelectLimitator>
          <Select labelLimitator={1} placeholder="Selecione o Status" id="test" value={transferStatus} isMultiple={true} onChange={setTransferStatus} options={STATUS_OPTIONS} name="test" />
        </Styled.SelectLimitator>
        <Switch
          checked={withErrors}
          onChange={() => (!enhancedBlockSetWithErrors()) && setWithErrors(!withErrors)}
          labelStyles='font-size: 13px;'
        >
          Com erros
        </Switch>
        <RangeCalendar
          startDatePlaceholderText='Data de Início'
          startDateId='filter-startDateId'
          startDate={initialDate}
          endDate={finallDate}
          endDateId='filter-endDateId'
          endDatePlaceholderText='Data final'
          onDatesChange={({ startDate, endDate }) => {
            setInitialDate(startDate);
            setFinallDate(endDate);
          }}
          onFocusChange={setfocusedInput}
          focusedInput={focusedInput}
        />
        <Button height={'44px'} disabled={!submitActive} onClick={onSubmitFilter}>
          Aplicar
        </Button>
      </Styled.FilterOptBox>
    </Styled.Container>
  );
});

TransfersFilter.propTypes = {
}

TransfersFilter.defaultProps = {

}

export default withRouter(TransfersFilter)
