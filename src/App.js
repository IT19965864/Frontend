import "./App.css";
import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
const StuAdminProfile = lazy(() => import("./pages/StuAdminProfile"));
const AddStudent = lazy(() => import("./pages/AddStudent"));
const SingleStudent = lazy(() => import("./pages/SingleStudent"));
const ViewStudents = lazy(() => import("./pages/ViewStudents"));
const ViewTimetable = lazy(() => import("./pages/ViewTimetable"));
const AddTimetabl = lazy(() => import("./pages/AddTimetable"));
const SingleViewTimetable = lazy(() => import("./pages/singleView"));
const Login = lazy(() => import("./pages/login"));
const TimeTbaleAdminProfile = lazy(() =>
  import("./pages/timeTbaleAdminProfile")
);

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {/* student manager routes */}
        <Route path="/stuAdminProfile" component={StuAdminProfile} />
        <Route path="/addStudent" component={AddStudent} />
        <Route path="/viewStudent" component={ViewStudents} />
        <Route path="/viewOneStudent/:id" component={SingleStudent} />

        {/* Timetable manager routes */}
        <Route path="/viewTimetable" component={ViewTimetable} />
        <Route path="/addTimetable" component={AddTimetabl} />
        <Route
          path="/singleViewTimetable/:id"
          component={SingleViewTimetable}
        />
        <Route
          path="/timeTbaleAdminProfile"
          component={TimeTbaleAdminProfile}
        />

        {/* lpgin manager routes */}
        <Route path="/login" component={Login} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
