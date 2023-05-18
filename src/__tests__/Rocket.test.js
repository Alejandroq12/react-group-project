import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';
import Rockets from '../components/rockets/Rockets';

test('renders Rockets component', () => {
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );

  const container = screen.getByTestId('rockets-container');
  expect(container).toBeInTheDocument();
});
