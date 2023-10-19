import { AddNewPostType } from './types';
import { baseUrl } from '../../api/constants';
import { request } from '../../api/request';
import { getTokens } from '../../api/tokens';

export const api = {
  addNewPost: (payload: AddNewPostType): Promise<Response> => {
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      formData.set(key, typeof value === 'number' ? value.toString() : value);
    });

    return request(baseUrl + 'blog/posts/', {
      method: 'POST',
      body: formData,
      headers: {
        authorization: 'Bearer ' + getTokens()?.access,
      },
    });
  },
};
