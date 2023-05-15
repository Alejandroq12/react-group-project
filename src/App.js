import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import Nav from './components/navigation/Nav';
import View from './components/view/View';
import Mission from './components/mission/Mission';
import Rockets from './components/rockets/Rockets';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/view" element={<View />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Mission />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
