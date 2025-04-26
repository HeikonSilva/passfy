import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import { Route, Routes } from 'react-router'
import Landing from './app/landing/Landing'
import Auth from './app/auth/Auth'
import Layout from './components/Layout'
import Dashboard from './app/dashboard/Dashboard'
import Generator from './app/generator/Generator'
import Cloud from './app/cloud/Cloud'
import External from './app/external/External'
import Check from './app/check/Check'
import Settings from './app/settings/Settings'
import Help from './app/help/Help'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Landing />} />
      <Route path="auth" element={<Auth />} />

      <Route element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="generator" element={<Generator />} />
        <Route path="help" element={<Help />} />
        <Route path="cloud" element={<Cloud />} />
        <Route path="external" element={<External />} />
        <Route path="check" element={<Check />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
