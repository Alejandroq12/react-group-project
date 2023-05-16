import { useSelector } from 'react-redux';
import './view.css';

function View() {
  const rockets = useSelector((state) => state.rockets.data);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  const missions = useSelector((state) => state.mission.data);
  const activeMember = missions.filter((mission) => mission.reserved);

  return (
    <div className="view">
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
      <div className="Active-members">
        <h2>Active Members</h2>
        <div className="active-container">
          {activeMember.map((mission) => (
            <div key={mission.mission_id} className="reserved-rocket">
              <p>{mission.mission_name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default View;
