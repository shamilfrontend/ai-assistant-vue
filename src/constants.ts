export const LocalStoreKey = {
  TRANSACTION_DATE_FROM: 'transaction_date_from',
  TRANSACTION_DATE_TO: 'transaction_date_to',
}
export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

export enum RouteName {
  HOME = 'HOME',
  CHAT = 'CHAT',

  NOT_FOUND = 'NOT_FOUND',
  FORBIDDEN = 'FORBIDDEN'
}
