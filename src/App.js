import './App.css';
import React, { Suspense, lazy } from 'react';
import{BrowserRouter as Router,Route, Routes} from 'react-router-dom'
const StuAdminProfile = lazy(() => import('./pages/StuAdminProfile'));
const AddStudent = lazy(() => import('./pages/AddStudent'));
const ViewStudent = lazy(() => import('./pages/ViewStudent'));
const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/stuAdminProfile" element={< StuAdminProfile />} />
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/viewStudent" element={<ViewStudent />} />
      
      </Routes>
    </Suspense>
  </Router>
);


export default App;
