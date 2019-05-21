export const FUNDS_LOW_PERCENTAGE = 10;
export const DAYS_OF_WEEK = [
  { id: 1, name: 'Dom' },
  { id: 2, name: 'Seg' },
  { id: 4, name: 'Ter' },
  { id: 8, name: 'Qua' },
  { id: 16, name: 'Qui' },
  { id: 32, name: 'Sex' },
  { id: 64, name: 'Sab' },
];

export const STATUS_OPTIONS = [
  { value: 'PAID', label: 'Pago' },
  { value: 'SCHEDULED', label: 'Agendado'},
  { value: 'PROCESSING', label: 'Processando'},
  { value: 'WAITING', label: 'Em espera'},
  { value: 'UNPAID', label: 'Não pago'},
]

export const FILE_EXTENSIONS_WHITELIST = ['.png', '.jpeg', '.jpg'];

export const MAX_FILES_NAME_LENGTH = 25;

export const BYTES_TO_MEGABYTES = 1024 * 1024;
