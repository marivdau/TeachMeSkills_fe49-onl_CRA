import { AddNewPostType } from './types';
import { baseUrl } from '../../api/constants';
import { request } from '../../api/request';
import { getTokens } from '../../api/tokens';

export const api = {
  addNewPost: (payload: AddNewPostType): Promise<Response> => {
    const formData = new FormData();
    formData.set('title', payload.title);
    formData.set('text', payload.text);
    formData.set('description', payload.description);
    // formData.append('lesson_num', payload.lesson_num);

    return request(baseUrl + 'blog/posts/', {
      method: 'POST',
      body: formData,
      headers: {
        authorization: 'Bearer ' + getTokens()?.access,
      },
    });
  },
};
