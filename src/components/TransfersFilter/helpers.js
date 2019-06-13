/**
 * Test if filter supports 'whit errors' option
 * @param {Object[]} received
 * @param {String} received[].value
 * @param {Object[]} rules
 * @param {Srting} rules[].value
 * @returns {Boolean} Return TRUE if found something that match the array of object or false instead
 */
export const blockSetWithErrors = (received, rules) => {
  if (Array.isArray(received) && received.length) {
    const content = Array.isArray(received) && received.some(option => {
      return rules.some(rule => option.value === rule.value)
    });

    return content;
  }

  return false;
};

