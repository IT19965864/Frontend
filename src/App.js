import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const StuAdminProfile = lazy(() => import("./pages/StuAdminProfile"));
const AddStudent = lazy(() => import("./pages/AddStudent"));
const ViewStudent = lazy(() => import("./pages/ViewStudent"));
const AddTeacher = lazy(() => import("./pages/AddTeacher"));
const ViewTeacher = lazy(() => import("./pages/ViewTeacher"));
const ViewSingleTeacher = lazy(() => import("./pages/ViewSingleTeacher"));
const UpdateTeacher = lazy(() => import("./pages/UpdateTeacher"));
const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/stuAdminProfile" component={StuAdminProfile} />
        <Route path="/addStudent" component={AddStudent} />
        <Route path="/viewStudent" component={ViewStudent} />
        <Route path="/addTeacher" component={AddTeacher} />
        <Route path="/singleTeacher/:id" component={ViewSingleTeacher} />
        <Route path="/updateTeacher/:id" component={UpdateTeacher} />
        <Route path="/" component={ViewTeacher} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
