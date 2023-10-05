import { baseUrl, jsonContentTypeHeaders } from '../../api/constants';
import { getTokens } from '../../api/tokens';
import { AllPostsPayload } from './types';

export const api = {
  getAllPosts: (payload: AllPostsPayload) => {
    const searchParams = new URLSearchParams();
    Object.entries(payload).forEach(([key, value]) => {
      searchParams.set(key, value.toString());
    });
    const tokens = getTokens();
    if (!tokens) return null;
    return fetch(baseUrl + 'blog/posts/?' + searchParams.toString(), {
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + tokens.access,
      },
    }).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER_ERROR');
      }
      return response.text();
    });
  },
};
