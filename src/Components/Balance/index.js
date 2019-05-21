import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Styles from './styles';
import AlertTriangle from './../Icons/alert-triangle';
import { formatPrice, formatPriceWithouSymbol } from '../../helpers';
import { FUNDS_LOW_PERCENTAGE } from '../../helpers/constants';
import { BALANCE_DEFAULT_COLOR, BALANCE_NEGATIVE_COLOR, BALANCE_POSITIVE_COLOR, BALANCE_WARNING_COLOR } from '../../styles/variables';
import SentFeedback from '../SentFeedback';
import Tooltip from '../Tooltip';
import Select from '../Select';

const Balance = React.memo(({ balance, isLoading, previsionDaysOptions, previsionDays, onPrevisionDaysSelectChange }) => {

  const LOW_FUNDS_MESSAGE = [<p key="low-p-1">Cuidado, seu saldo agendado está muito</p>, <p key="low-p-2">próximo do seu saldo atual</p>];
  const NEGATIVE_FUNDS_MESSAGE = [<p key="negative-p-1">Seu saldo agendado é superior ao seu saldo.</p>, <p key="negative-p-2">Faça uma TED de {formatPrice(balance.scheduled - balance.current)}</p>];

  const isFundsLow = () => {
    if (balance.current === 0 && balance.scheduled === 0) {
      return false;
    }

    return balance.scheduled * (FUNDS_LOW_PERCENTAGE / 100) >= (balance.current - balance.scheduled);
  }

  const isNegativeFunds = () => {
    return (balance.current - balance.scheduled) < 0;
  }

  const getCurrentBalanceColor = () => {
    return balance.current > 0 ? BALANCE_POSITIVE_COLOR : BALANCE_DEFAULT_COLOR;
  }

  const getScheduledBalanceColor = () => {
    if (balance.scheduled === 0) {
      return BALANCE_DEFAULT_COLOR;
    }
    return isFundsLow() ? (isNegativeFunds() ? BALANCE_NEGATIVE_COLOR : BALANCE_WARNING_COLOR) : BALANCE_POSITIVE_COLOR;
  }

  const renderLoading = () => {
    return isLoading && (
      <Styles.LoadingContainer>
        <span>Carregando Saldo</span>
        <SentFeedback size="16px" success={undefined} error={undefined} strokeWidth="9px"/>
      </Styles.LoadingContainer>
    );
  }

  return (
    <>
      <Styles.BalanceContainer>
        <Styles.BalanceRow>
          <Styles.BalanceColumn>
            <Styles.Label>Saldo atual</Styles.Label>
            <Styles.Balance show={!isLoading} color={ getCurrentBalanceColor() }>{formatPrice(balance.current)}</Styles.Balance>
            { renderLoading() }
          </Styles.BalanceColumn>

          <Styles.MiddleAlertIcon show={isFundsLow()}>
            { !isLoading && <Tooltip
                                key="alertIconTooltip"
                                message={isNegativeFunds() ? NEGATIVE_FUNDS_MESSAGE : LOW_FUNDS_MESSAGE }
                                Icon={AlertTriangle}
                                bgColor={ isNegativeFunds() ?  BALANCE_NEGATIVE_COLOR : BALANCE_WARNING_COLOR }
                                iconColor={ isNegativeFunds() ?  BALANCE_NEGATIVE_COLOR : BALANCE_WARNING_COLOR } />
            }
          </Styles.MiddleAlertIcon>

          <Styles.BalanceColumn>
            <Styles.Label>Saldo agendado</Styles.Label>
            <Styles.Balance show={!isLoading} color={getScheduledBalanceColor()}>{formatPrice(balance.scheduled)}</Styles.Balance>
            { renderLoading() }
          </Styles.BalanceColumn>
        </Styles.BalanceRow>

        <Styles.BalanceRow>
          <Styles.BalanceIntervalContainer>
            <Select
              isSearchable={false}
              basicStyle
              isMultiple={false}
              value={previsionDays}
              onChange={onPrevisionDaysSelectChange}
              options={previsionDaysOptions}
              name="balanceScheduleDateInterval"
              id="balanceScheduleDateInterval"
            />
          </Styles.BalanceIntervalContainer>
        </Styles.BalanceRow>
      </Styles.BalanceContainer>
    </>
  );
});


Balance.propTypes = {
  balance: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  previsionDaysOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  previsionDays: PropTypes.object.isRequired,
  onPrevisionDaysSelectChange: PropTypes.func.isRequired,
}

export default Balance;
