import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PulseLoader from '../components/loaders/pulsloader/PulsLoader';

const HomePage = lazy(() => import('../pages/home/HomePage'));
const DetailsPage = lazy(() => import('../pages/details/DetailsPage'));

const MainRoutes = () => {
  return (
    <Suspense fallback={<PulseLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:address/:id" element={<DetailsPage />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoutes;
