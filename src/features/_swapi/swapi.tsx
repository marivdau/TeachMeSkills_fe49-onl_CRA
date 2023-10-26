import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSwapi } from './swapi.slice';

export const Swapi: React.FC = () => {
  // const dispatch = useAppDispatch();

  // const { swapi } = useAppSelector(({ swapi }) => swapi);
  // useEffect(() => {
  //   dispatch(getSwapi());
  // }, [dispatch]);
  return (
    <div>
      {/* <div>{swapi.name}</div>
      <div>{swapi.rotation_period}</div>
      <div>{swapi.gravity}</div>
      <a href={swapi.url}>Link</a> */}
    </div>
  );
};
