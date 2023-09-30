export interface IPostCard {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
  votedUpNum?: number | null;
  votedDownNum?: number | null;
  userVote?: 'up' | 'down' | null;
}
