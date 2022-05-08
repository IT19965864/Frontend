import "./App.css";
import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
const StuMarkAdminProfile = lazy(() =>
  import("../src/pages/StuMarkAdminProfile")
);
const AddMark = lazy(() => import("../src/pages/AddMark"));
const ViewMarks = lazy(() => import("../src/pages/ViewMarks"));
const ViewSingleMark = lazy(() => import("../src/pages/ViewSingleMark"));
const MarkReport = lazy(() => import("../src/pages/MarkReport"));
const UpdateMarks = lazy(() => import("../src/pages/UpdateMark"));

// const StuAdminProfile = lazy(() => import("../src/pages/StuAdminProfile"));
const AddStudent = lazy(() => import("../src/pages/AddStudent"));
const SingleStudent = lazy(() => import("../src/pages/SingleStudent"));
const ViewStudents = lazy(() => import("../src/pages/ViewStudents"));
const ViewTimetable = lazy(() => import("../src/pages/ViewTimetable"));
const AddTimetabl = lazy(() => import("../src/pages/AddTimetable"));
const SingleViewTimetable = lazy(() => import("../src/pages/singleView"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {/* stdent marks manager route */}
        <Route path="/stuMarkAdminprofile" component={StuMarkAdminProfile} />
        <Route path="/addMark" component={AddMark} />
        <Route path="/viewMarks" component={ViewMarks} />
        <Route path="/ViewSingleMark/:id" component={ViewSingleMark} />
        <Route path="/mark-report" component={MarkReport} />
        <Route path="/UpdateMark/:id" component={UpdateMarks} />
        {/* student manager routes */}
        {/* <Route path="/stuAdminProfile" component={StuAdminProfile} />
        <Route path="/addStudent" component={AddStudent} />
        <Route path="/viewStudent" component={ViewStudents} />
        <Route path="/viewOneStudent/:id" component={SingleStudent} /> */}

        {/* Timetable manager routes */}
        <Route path="/viewTimetable" component={ViewTimetable} />
        <Route path="/addTimetable" component={AddTimetabl} />
        <Route
          path="/singleViewTimetable/:id"
          component={SingleViewTimetable}
        />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
