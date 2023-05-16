import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocketsData } from '../../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.data);
  const error = useSelector((state) => state.rockets.error);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRocketsData());
    }
  }, [dispatch, rockets]);

  return (
    <div>
      {error && (
        <div>
          Error:
          {' '}
          {error}
        </div>
      )}
      {rockets.map((rocket) => (
        <div key={rocket.id}>
          <h2>{rocket.name}</h2>
          <p>
            Type:
            {rocket.description}
          </p>
          <img src={rocket.flickr_images[0]} alt={`${rocket.name}`} />
        </div>
      ))}
    </div>
  );
};

export default Rockets;
