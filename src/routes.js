import React from "react"

import { Route, Routes as RoutesDOM } from 'react-router-dom'

import Home from './pages/Home.jsx'

function Routes() {
  return (
    <RoutesDOM>
      <Route index path="/" element={<Home />} />
    </RoutesDOM>
  );
}

export default Routes