import "./App.css";
import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

const ViewTimetable = lazy(() => import("./pages/ViewTimetable"));
const AddTimetabl = lazy(() => import("./pages/AddTimetable"));
const SingleViewTimetable = lazy(() => import("./pages/singleView"));
const Login = lazy(() => import("./pages/login"));
const updateTimetable = lazy(() => import("./pages/updateTimetable"));
const TimeTbaleAdminProfile = lazy(() =>
  import("./pages/timeTbaleAdminProfile")
);
const StuMarkAdminProfile = lazy(() =>
  import("../src/pages/StuMarkAdminProfile")
);
const AddMark = lazy(() => import("../src/pages/AddMark"));
const ViewMarks = lazy(() => import("../src/pages/ViewMarks"));
const ViewSingleMark = lazy(() => import("../src/pages/ViewSingleMark"));
const UpdateMarks = lazy(() => import("../src/pages/UpdateMark"));

// const StuAdminProfile = lazy(() => import("../src/pages/StuAdminProfile"));

const AddStudent = lazy(() => import("./pages/AddStudent"));
const SingleStudent = lazy(() => import("./pages/SingleStudent"));
const ViewStudents = lazy(() => import("./pages/ViewStudents"));
const UpdateStudent = lazy(() => import("./pages/UpdateStudent"));
// const StuAdminProfile = lazy(() => import("./pages/StuAdminProfile"));
// const AddStudent = lazy(() => import("./pages/AddStudent"));
// const SingleStudent = lazy(() => import("./pages/SingleStudent"));
// const ViewStudents = lazy(() => import("./pages/ViewStudents"));

const AddTeacher = lazy(() => import("./pages/AddTeacher"));
const ViewTeacher = lazy(() => import("./pages/ViewTeacher"));
const ViewSingleTeacher = lazy(() => import("./pages/ViewSingleTeacher"));
const UpdateTeacher = lazy(() => import("./pages/UpdateTeacher"));
const Home = lazy(() => import("./pages/Home"));
const TeacherAdmin = lazy(() => import("./pages/TeacherAdminProfile"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {/* teacher routes */}

        <Route path="/addTeacher" component={AddTeacher} />
        <Route path="/singleTeacher/:id" component={ViewSingleTeacher} />
        <Route path="/updateTeacher/:id" component={UpdateTeacher} />
        <Route exact path="/" component={Home} />
        <Route path="/TeacherAdminProfile" component={TeacherAdmin} />

        <Route path="/viewTeacher" component={ViewTeacher} />
        <Route path="/stuAdminProfile" component={StuAdminProfile} />
        <Route path="/addStudent" component={AddStudent} />
        <Route path="/viewStudent" component={ViewStudents} />
        <Route path="/viewOneStudent/:id" component={SingleStudent} />
        <Route path="/updateStudent/:id" component={UpdateStudent} />
        {/* stdent marks manager route */}
        <Route path="/stuMarkAdminprofile" component={StuMarkAdminProfile} />
        <Route path="/addMark" component={AddMark} />
        <Route path="/viewMarks" component={ViewMarks} />
        <Route path="/ViewSingleMark/:id" component={ViewSingleMark} />
        {/* <Route path="/mark-report" component={MarkReport} /> */}
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
        <Route
          path="/timeTbaleAdminProfile"
          component={TimeTbaleAdminProfile}
        />
        <Route path="/updateTimetable/:id" component={updateTimetable} />

        {/* lpgin manager routes */}
        <Route path="/login" component={Login} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
