import { baseUrl, jsonContentTypeHeaders } from '../../api/constants';
import { request } from '../../api/request';
import {
  ActivationPayload,
  ActivationResponse,
  AuthorizationPayload,
  AuthorizationResponse,
  RegistrationPayload,
} from './types';

export const api = {
  activation: (payload: ActivationPayload): Promise<string> => {
    return request(baseUrl + 'auth/users/activation/', {
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

  autorization: (
    payload: AuthorizationPayload
  ): Promise<AuthorizationResponse> => {
    return request(baseUrl + 'auth/jwt/create/', {
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

  register: (payload: RegistrationPayload) => {
    return request(baseUrl + 'auth/users/', {
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
