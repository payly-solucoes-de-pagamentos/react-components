import moment from "moment";

export const sortById = (a, b) => {
  if (a.id.value < b.id.value) {
    return -1;
  }

  if (a.id.value > b.id.value) {
    return 1;
  }

  return 0;
};

export const sortByAmount = (a, b) => {
  if (a.amount.value < b.amount.value) {
    return -1;
  }

  if (a.amount.value > b.amount.value) {
    return 1;
  }

  return 0;
};

export const sortByName = (a, b) => {
  if (a.name.value < b.name.value) {
    return -1;
  }

  if (a.name.value > b.name.value) {
    return 1;
  }

  return 0;
};

export const sortByPaymentDate = (a, b) => {
  const aDate = moment(a.paymentDate.value);
  const bDate = moment(b.paymentDate.value);

  if (aDate.isBefore(bDate)) {
    return -1;
  }

  if (aDate.isAfter(bDate)) {
    return 1;
  }

  return 0;
};

export const sortByStatus = (a, b) => {
  if (a.status.value < b.status.value) {
    return -1;
  }

  if (a.status.value > b.status.value) {
    return 1;
  }

  return 0;
};

const sorts = {
  id: {
    sortStrategy: sortById
  },
  name: {
    sortStrategy: sortByName
  },
  paymentDate: {
    sortStrategy: sortByPaymentDate
  },
  status: {
    sortStrategy: sortByStatus
  },
  amount: {
    sortStrategy: sortByAmount
  }
};

export default sorts;
