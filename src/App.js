import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';
import Nav from './components/navigation/Nav';
import View from './components/view/View';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/view" element={<View />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
