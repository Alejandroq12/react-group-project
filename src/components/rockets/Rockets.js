import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocketsData } from '../../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.data);
  const error = useSelector((state) => state.rockets.error);

  useEffect(() => {
    if (rockets.lenght === 0) {
      dispatch(fetchRocketsData());
    }
  }, [dispatch, rockets]);
};
