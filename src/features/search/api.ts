import { baseUrl } from '../../api/constants';
import { getTokens } from '../../api/tokens';
import { AllPostsResponse } from './types';

export const searchsApi = {
  search: (search: string): Promise<AllPostsResponse> => {
    return fetch(
      baseUrl +
        `blog/posts/?lesson_num=2023&limit=10&offset=0&search=${search}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + getTokens()?.access,
        },
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER ERROR');
      }
      return response.json();
    });
  },
};
