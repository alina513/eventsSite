import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/HomePage'));
const EventDetailsPage = lazy(() => import('../pages/EventDetailPsage'));

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/:eventId" element={<EventDetailsPage />}/>
      </Routes>
    </div>
  );
};
