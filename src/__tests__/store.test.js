import store from '../redux/store';
import missionReducer from '../redux/mission/missionSlice';
import rocketsReducer from '../redux/rockets/rocketsSlice';

test('store is configured correctly', () => {
  expect(store.getState()).toEqual({
    mission: missionReducer(undefined, {}),
    rockets: rocketsReducer(undefined, {}),
  });
});
