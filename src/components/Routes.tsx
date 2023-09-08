import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
/* Components Import */
import { Home } from './Home';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </Router>
  );
};
