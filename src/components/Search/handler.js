
const searchFn = (onChange) => {
  let timer;

  const startTime = (filter) => {
    timer = setTimeout(() => {
      onChange(filter);
    }, 500);
  };

  /**
   * @description Clear last timeout.
   * @return {void}
   */
  const clearTime = () => {
    clearTimeout(timer);
  };

  /**
   * @description Clear actual timeout and start a new to get filtered campaign.
   * @param {String | Number} toSearch
   */
  const resetTime = (toSearch) => {
    clearTimeout(timer);
    startTime(toSearch);
  };

  return {
    clearTime,
    resetTime,
  };
};

export default searchFn;
