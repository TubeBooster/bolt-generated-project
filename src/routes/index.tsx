import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Layout } from '../components/Layout';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};
