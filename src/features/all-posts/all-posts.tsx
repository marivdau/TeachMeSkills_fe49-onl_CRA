import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getAllPosts,
  getAllPostsFailure,
  getAllPostsSuccess,
} from './all-posts.slice';
import { allPosts } from '../../mock-data/mock-data-posts-all';

export const AllPosts: React.FC = () => {
  const dispatch = useAppDispatch();
  const { posts, isLoading, error } = useAppSelector(
    ({ allPosts }) => allPosts
  );

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (Math.random() < 0.5) {
        dispatch(getAllPostsSuccess({ posts: allPosts }));
      } else {
        dispatch(getAllPostsFailure({name: 'Error', mesage: 'SERVER ERROR'}));
      }
    }, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: ${error.message}</div>;
  }
  return (
    <ul>
      {posts.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};
