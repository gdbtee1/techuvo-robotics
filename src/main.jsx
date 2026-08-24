import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles.css';
import AppShell from './components/AppShell';

const Home = lazy(() => import('./pages/Home'));
const Platform = lazy(() => import('./pages/Platform'));
const LiveDemo = lazy(() => import('./pages/LiveDemo'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Company = lazy(() => import('./pages/Company'));

function Loader() {
  return <div className="route-loader" role="status" aria-live="polite">Loading Techuvo Robotics…</div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppShell>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/demo" element={<LiveDemo />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </Suspense>
      </AppShell>
    </BrowserRouter>
  </React.StrictMode>
);
