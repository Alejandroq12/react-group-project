import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../../redux/mission/missionSlice';
import './Mission.css';

function Mission() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission);

  useEffect(() => {
    if (missions.status === 'idle') {
      dispatch(fetchData());
    }
  }, [missions.status, dispatch]);

  return (
    <div>
      {missions.status === 'loading' && <div>Loading...</div>}
      {missions.status === 'failed' && <div>{missions.error}</div>}
      {missions.status === 'succeeded' && (
        <div className="big-container">
          <div className="mission-container">
            <h1 className="h1">Name</h1>
            <h1 className="h1-description">Description</h1>
            <h1 className="h1-status">Status</h1>
          </div>
          {missions.data && missions.data.length > 0 ? (
            missions.data.map((mission) => (
              <div className="container" key={mission.mission_id}>
                <h2 className="h2">{mission.mission_name}</h2>
                <p className="description">{mission.description}</p>
                <div className="mission-stats">Not A Member</div>
                <button type="button" className="mission-btn">Join Mission </button>
              </div>
            ))
          ) : (
            <div>No missions available.</div>
          )}
        </div>
      )}
    </div>
  );
}

export default Mission;
