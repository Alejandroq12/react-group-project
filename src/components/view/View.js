import { useSelector } from 'react-redux';
import './view.css';

function View() {
  const rockets = useSelector((state) => state.rockets.data);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div>
      <h2>My Rockets</h2>
      <div className="reserved-rockets-container">
        {reservedRockets.map((rocket) => (
          <div key={rocket.id} className="reserved-rocket">
            <p>{rocket.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default View;
