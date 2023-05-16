import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchData, joinMission, leaveMission } from '../../redux/mission/missionSlice';
import './Mission.css';

function Mission() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.mission);

  useEffect(() => {
    if (missions.status === 'idle') {
      dispatch(fetchData());
    }
  }, [missions.status, dispatch]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

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
            <div className="h1-status-2" />
          </div>
          {missions.data && missions.data.length > 0 ? (
            missions.data.map((mission) => (
              <div className="container" key={mission.mission_id}>
                <h2 className="h2">{mission.mission_name}</h2>
                <p className="description">{mission.description}</p>
                <div className="reserved">
                  {mission.reserved ? (
                    <p className="mission-stats">Active Member</p>
                  ) : (
                    <p className="mission-stats-red">Not A Member</p>
                  )}
                </div>
                <div className="reserved-btn">
                  {mission.reserved ? (
                    <button
                      onClick={() => handleLeaveMission(mission.mission_id)}
                      type="button"
                      className="mission-btn"
                    >
                      Leave Mission
                    </button>
                  ) : (
                    <button
                      onClick={() => handleJoinMission(mission.mission_id)}
                      type="button"
                      className="mission-btn-red"
                    >
                      Join Mission
                    </button>
                  )}
                </div>
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
