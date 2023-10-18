import { AllPostsResponseResult } from '../../api/types';

export type AllPostsResponse = {
  count: number;
  next: string;
  previous: null | string;
  results: AllPostsResponseResult[];
};
