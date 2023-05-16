import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../../redux/mission/missionSlice';

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
        <div>
          {missions.data && missions.data.length > 0 ? (
            missions.data.map((mission) => (
              <div key={mission.mission_id}>
                <h2>{mission.mission_name}</h2>
                <p>{mission.description}</p>
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
