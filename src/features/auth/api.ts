import { RegistrationPayload } from './types';

export const api = {
  register: (payload: RegistrationPayload) => {
    console.log('api.register', payload);
    return new Promise<{ isOk: boolean }>((resolve) =>
      setTimeout(() => resolve({ isOk: true }), 3000)
    );
  },
};
