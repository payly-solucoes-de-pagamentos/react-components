
const MASKS = {
  '24_HOURS': (value) => {
    if(value.match(/(^[0-2]$)|(^[2][0-3]:$)|(^[0-1][0-9]:$)|(^[0-1][0-9]:[0-5]$)|(^[0-1][0-9]:[0-5][0-9]$)|(^[0-2][0-3]:[0-5]$)|(^[0-2][0-3]:[0-5][0-9]$)/g)) {
      return value;
    } else {
      if (value.includes(':') && value.length === 3) {
        return value.slice(0,-2);
      }
      return value.slice(0,-1);
    }
  },
  'HOUR': '99:99'
}

export default MASKS;
