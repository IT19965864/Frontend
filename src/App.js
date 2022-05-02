import "./App.css";
import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
const StuMarkAdminProfile = lazy(() => import("./pages/StuMarkAdminProfile"));
const AddMark = lazy(() => import("./pages/AddMark"));
const ViewMarks = lazy(() => import("./pages/ViewMarks"));
const ViewSingleMark = lazy(() => import("./pages/ViewSingleMark"));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/stuMarkAdminprofile" component={StuMarkAdminProfile} />
        <Route path="/addMark" component={AddMark} />
        <Route path="/viewMarks" component={ViewMarks} />
        <Route path="/ViewSingleMark/:id" component={ViewSingleMark} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
