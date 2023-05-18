import { useSelector } from 'react-redux';
import './view.css';

function View() {
  const rockets = useSelector((state) => state.rockets.data);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  const missions = useSelector((state) => state.mission.data);
  const activeMember = missions.filter((mission) => mission.reserved);

  return (
    <div className="view">
      <div className="view-container">
        <h2>My Missions</h2>
        <div className="view-active-container">
          {activeMember.map((mission) => (
            <div key={mission.mission_id} className="view-active-mission">
              <p>{mission.mission_name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="view-container">
        <h2>My Rockets</h2>
        <div className="view-reserved-rockets-container">
          {reservedRockets.map((rocket) => (
            <div key={rocket.id} className="view-reserved-rocket">
              <p>{rocket.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default View;
