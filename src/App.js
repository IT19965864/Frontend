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
const StuAdminProfile = lazy(() => import("./pages/StuAdminProfile"));
const AddStudent = lazy(() => import("./pages/AddStudent"));
const SingleStudent = lazy(() => import("./pages/SingleStudent"));
const ViewStudents = lazy(() => import("./pages/ViewStudents"));

const ViewTimetable = lazy(() => import("../src/pages/ViewTimetable"));
const AddTimetabl = lazy(() => import("../src/pages/AddTimetable"));
const SingleViewTimetable = lazy(() => import("../src/pages/singleView"));
const AddTeacher = lazy(() => import("./pages/AddTeacher"));
const ViewTeacher = lazy(() => import("./pages/ViewTeacher"));
const ViewSingleTeacher = lazy(() => import("./pages/ViewSingleTeacher"));
const UpdateTeacher = lazy(() => import("./pages/UpdateTeacher"));
const Home = lazy(() => import("./pages/Home"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {/* teacher routes */}

        <Route path="/addTeacher" component={AddTeacher} />
        <Route path="/singleTeacher/:id" component={ViewSingleTeacher} />
        <Route path="/updateTeacher/:id" component={UpdateTeacher} />
        <Route path="/Home" component={Home} />

        <Route exact path="/" component={ViewTeacher} />
        <Route path="/stuAdminProfile" component={StuAdminProfile} />
        <Route path="/addStudent" component={AddStudent} />
        <Route path="/viewStudent" component={ViewStudents} />
        <Route path="/viewOneStudent/:id" component={SingleStudent} />
        {/* stdent marks manager route */}
        <Route path="/stuMarkAdminprofile" component={StuMarkAdminProfile} />
        <Route path="/addMark" component={AddMark} />
        <Route path="/viewMarks" component={ViewMarks} />
        <Route path="/ViewSingleMark/:id" component={ViewSingleMark} />

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
