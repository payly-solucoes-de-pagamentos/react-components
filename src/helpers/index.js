import moment from 'moment';
import { DAYS_OF_WEEK } from './constants';

export const toDate = (date) => {
  return moment(date).format('DD/MM/YYYY');
}

export const toMomentDate = (date) =>  date ? moment(date) : null;

export const formatDate = (date) => {
  return moment(date).format('YYYY-MM-DD');
}

export const formatDateSimple = (date) => {
  return moment(date).format('DD/MM - HH[h]mm');
}

export const isIntervalByCurrentDate = (startDate, endDate) => {
  const currentDate = moment();
  return moment(currentDate).isBetween(startDate, endDate);
}

export const checkOnHold = (startDate) => {
  const currentDate = moment();
  return moment(startDate).isAfter(currentDate);
}

export const isBefore = ({startDate, endDate}) => {
  return moment(startDate).isBefore(endDate);
}

export const formatPrice = (price) => {
  if (price.toString().includes('R$')) return price;
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export const formatPriceWithouSymbol = (price) => {
  const priceWithoutSymbol = price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  return priceWithoutSymbol.replace('R$', '');
};

export const decimalToBinary = (dec) => {
  return (dec >>> 0).toString(2).padStart(7, '0');
}

export const parseDaysOfWeek = (binary) => {
  return decimalToBinary(binary).split('').reverse().map((day, i) => {
    return {
      ...DAYS_OF_WEEK[i],
      active: day === '1',
    }
  });
}

export const priceToFloat = (price) => {

  let res = String(price).replace('R$', '');
  res = res.replace('.', '');
  res = res.replace(',', '.');
  res = parseFloat(res);

  return res;
};

export const priceToInt = (price) => {
  let res = String(price).replace('R$', '');
  res = res.replace('.', '');
  res = res.replace(',', '.');
  res = parseInt(res, 10);

  return res;
};

export const getActiveDays = (days) => {
  return days.filter(day => day.active).map((day => day.id));
};

export const formatBase64ToSend = (base64Value = '', ext = 'jpeg') => {
  return base64Value.replace(`data:image/${ext};base64,`, '');
};

export const stringLimitator = (string, max) => {
  if (string.length <= max) {
    return string;
  }

  return `${string.substring(0, max - 3)}...`;
}

export const clearAlphanumerics = (string) => {
  return string.replace(/\W/g, '');
}
