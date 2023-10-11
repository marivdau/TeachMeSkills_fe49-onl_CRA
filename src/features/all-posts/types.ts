export type AllPostsPayload = {
  limit: number;
  offset: number;
  ordering: string;
  search: string;
};

export type AllPostsResponse = {
  results: Array<{
    id: number;
    image?: string;
    text: string;
    date: string;
    title: string;
    author: number;
  }>;
};
