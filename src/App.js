import './App.css';
import React, { Suspense, lazy } from 'react';
import{BrowserRouter as Router,Route, Switch} from 'react-router-dom'
const StuAdminProfile = lazy(() => import('./pages/StuAdminProfile'));
const AddStudent = lazy(() => import('./pages/AddStudent'));
const SingleStudent = lazy(() => import('./pages/SingleStudent'));
const ViewStudents = lazy(() => import('./pages/ViewStudents'));
const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/stuAdminProfile" component={StuAdminProfile} />
        <Route path="/addStudent" component={AddStudent}/>
        <Route path="/viewStudent" component={ViewStudents} />
        <Route path="/viewOneStudent" component={SingleStudent} />
       
      
      </Switch>
    </Suspense>
  </Router>
);


export default App;
