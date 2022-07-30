import React from "react"

import { Route, Routes as RoutesDOM } from 'react-router-dom'

import Home from './pages/Home'
import Results from './pages/Results'

function Routes() {
  return (
    <RoutesDOM>
      <Route path="/" element={<Home />} />
      <Route path="results" element={<Results />} />
    </RoutesDOM>
  );
}

export default Routes