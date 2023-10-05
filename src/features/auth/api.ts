import { baseUrl, jsonContentTypeHeaders } from '../../api/constants';
import {
  ActivationPayload,
  ActivationResponse,
  AuthorizationPayload,
  AuthorizationResponse,
  RegistrationPayload,
} from './types';

export const api = {
  activation: (payload: ActivationPayload): Promise<string> => {
    return fetch(baseUrl + 'auth/users/activation/', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { ...jsonContentTypeHeaders },
    }).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER_ERROR');
      }
      return response.text();
    });
  },

  autorization: (payload: AuthorizationPayload): Promise<AuthorizationResponse> => {
    return fetch(baseUrl + 'auth/jwt/create/', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { ...jsonContentTypeHeaders },
    }).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER_ERROR');
      }
      return response.json();
    })
  },

  register: (payload: RegistrationPayload) => {
    return fetch(baseUrl + 'auth/users/', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { ...jsonContentTypeHeaders },
    }).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER_ERROR');
      }
      return response.json();
    });
  },
};
