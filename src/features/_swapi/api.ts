import { jsonContentTypeHeaders } from '../../api/constants';
import { swapiRequest } from '../../api/request';
import { SwapiResponse } from './types';

export const api = {
  getSwapi: (): Promise<SwapiResponse> => {
    
    return swapiRequest(`https://swapi.dev/api/planets/1/`, {
      method: 'GET',
      headers: {
        ...jsonContentTypeHeaders,        
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER_ERROR');
      }
      return response.json();
    });
  },
};
