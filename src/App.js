import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const StuAdminProfile = lazy(() => import("./pages/StuAdminProfile"));
const AddStudent = lazy(() => import("./pages/AddStudent"));
const SingleStudent = lazy(() => import("./pages/SingleStudent"));
const ViewStudents = lazy(() => import("./pages/ViewStudents"));
const ViewTimetable = lazy(() => import("./pages/ViewTimetable"));
const AddTimetable = lazy(() => import("./pages/AddTimetable"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/stuAdminProfile" element={<StuAdminProfile />} />
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/viewStudent" element={<ViewStudents />} />
        <Route path="/singleStudent" element={<SingleStudent />} />
        <Route path="/viewTimetable" element={<ViewTimetable />} />
        <Route path="/addTimetable" element={<AddTimetable />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
