/* API Import */
import { api } from './api';
/* Referencial API Import */

export const apiClient = () => {
  return Object.freeze({
    api: api(),
  });
};
