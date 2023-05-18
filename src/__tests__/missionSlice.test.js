import missionReducer, { joinMission, leaveMission } from '../redux/mission/missionSlice';

describe('Test Mission Reserved', () => {
  it('Join Mission', () => {
    const state = {
      data: [
        { mission_id: 1, reserved: false },
        { mission_id: 2, reserved: true },
        { mission_id: 3, reserved: false },
      ],
    };

    const action = missionReducer(state, joinMission({ mission_id: 2 }));

    const expected = ([
      { mission_id: 1, reserved: false },
      { mission_id: 2, reserved: true },
      { mission_id: 3, reserved: false },
    ]);

    expect(action.data).toEqual(expected);
  });

  it('Leave Mission', () => {
    const state = {
      data: [
        { mission_id: 1, reserved: true },
        { mission_id: 2, reserved: true },
        { mission_id: 3, reserved: true },
      ],
    };

    const action = {
      payload: 2,
    };

    const newState = missionReducer(state, leaveMission(action));

    expect(newState.data[1].reserved).toBe(true);
  });
});
