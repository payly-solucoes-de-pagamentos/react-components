import queryString from 'query-string';
import { STATUS_OPTIONS } from '../helpers/constants';
/**
 * @typedef {Object} Router - Comes from with router
 */

/**
 * SET some objects into URL Query string
 * @param {!Router} history
 * @param {!Router} location
 * @param {!Object} data
 * @param {Boolean} [replace=true]
 * @param {Array} [exceptions=undefined]
 */
export const setQueryString = ({ history, location }, data, replace = true, exceptions) => {
  const currentQueries = queryString.parse(location.search, { arrayFormat: 'bracket' });
  const getTheExceptions = {};

  Array.isArray(exceptions) && exceptions.forEach(exception => {
    const handler = currentQueries[exception];
    if (handler) {
      getTheExceptions[exception] = handler;
    }
  });

  const queryObject = replace ? { ...getTheExceptions, ...data } : { ...currentQueries, ...data };

  const query = queryString.stringify(queryObject, { arrayFormat: 'bracket' });
  history.push({
    search: query
  });
};



/**
 * GET filters by query string in URL that can be customized with a function param
 * @param {!Router} location
 * @param {Function} [customFilterReturn]
 * @returns {Object|Boolean} Array if has query strings in URL, or false
 */
export const getFiltersFromQs = ({ location, customFilterReturn = () => false }) => {
  const { search } = location;

  if (search) {
    const allQs = queryString.parse(search, { arrayFormat: 'bracket' });
    allQs.withErrors = allQs.withErrors ? (/true/i).test(allQs.withErrors) : true;

    return customFilterReturn(allQs) || allQs
  }

  return false;
}

/**
 * Compare the received content to avaliable filter status
 * @param {?Array} received
 * @returns {(Array|Null)} Array if received is Array and filled, or null
 */
export const getQueryTransferStatus = (received) => {
  if (Array.isArray(received) && received.length) {
    const content = STATUS_OPTIONS.map(option => {
      const shouldAppear = received.some(rule => option.value === rule);
      if (shouldAppear) {
        return option
      }
    }).filter(f => f);

    return content;
  }

  return null;
};

/**
 * Assign new values to filters if it has different from setted in query stirng
 * @param {!Object} data
 * @param {!Object} allFilterStates
 * @returns {Object}
 */
export const getStatesFromQs = ({ data, allFilterStates }) => {
  const {
    transferStatus: QS_transferStatus = allFilterStates.transferStatus,
    withErrors = allFilterStates.withErrors,
    startDate = allFilterStates.startDate,
    endDate = allFilterStates.endDate,
  } = data;

  const transferStatus = getQueryTransferStatus(QS_transferStatus);
  return {
    transferStatus,
    withErrors,
    startDate,
    endDate,
  }
}

