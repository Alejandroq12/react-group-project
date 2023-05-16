import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchRocketsData,
  reserveRocket,
  cancelReservation,
} from '../../redux/rockets/rocketsSlice';
import './rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.data);
  const error = useSelector((state) => state.rockets.error);
  const loading = useSelector((state) => state.rockets.loading);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRocketsData());
    }
  }, [dispatch, rockets]);

  const handleReserveRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleCancelReservation = (id) => {
    dispatch(cancelReservation(id));
  };

  return (
    <div className="rockets-container">
      {loading && <div>Loading...</div>}
      {error && (
        <div>
          Error:
          {error}
        </div>
      )}
      {rockets.map((rocket) => (
        <div key={rocket.id} className="rocket">
          <img
            className="rocket-img"
            src={rocket.flickr_images[0]}
            alt={`${rocket.name}`}
          />
          <div className="rocket-info">
            <p className="rocket-name">{rocket.name}</p>
            <p>
              {rocket.reserved && <span className="reserved-badge">Reserved</span>}
              {rocket.description}
            </p>
            {rocket.reserved ? (
              <button
                className="button"
                type="submit"
                onClick={() => handleCancelReservation(rocket.id)}
              >
                Cancel Reservation
              </button>
            ) : (
              <button
                className="button"
                type="submit"
                onClick={() => handleReserveRocket(rocket.id)}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
