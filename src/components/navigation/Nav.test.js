import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';

describe('Nav', () => {
  test("renders Space Travelers' Hub title", () => {
    render(
      <Router>
        <Nav />
      </Router>,
    );

    const titleElement = screen.getByText(/Space Travelers' Hub/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders all navigation links', () => {
    render(
      <Router>
        <Nav />
      </Router>,
    );

    const rocketsLink = screen.getByText(/Rockets/i);
    const missionsLink = screen.getByText(/Missions/i);
    const myProfileLink = screen.getByText(/My Profile/i);

    expect(rocketsLink).toBeInTheDocument();
    expect(missionsLink).toBeInTheDocument();
    expect(myProfileLink).toBeInTheDocument();
  });
});
