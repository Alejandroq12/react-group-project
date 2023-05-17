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
          <table className="mission-table">
            <thead>
              <tr>
                <th>Mission</th>
                <th>Description</th>
                <th>Status</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {missions.data && missions.data.length > 0 ? (
                missions.data.map((mission) => (
                  <tr key={mission.mission_id}>
                    <td>{mission.mission_name}</td>
                    <td>{mission.description}</td>
                    <td>
                      {mission.reserved ? (
                        <span className="mission-stats">Active Member</span>
                      ) : (
                        <span className="mission-stats-red">Not A Member</span>
                      )}
                    </td>
                    <td>
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
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No missions available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Mission;
