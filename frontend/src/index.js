import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Router } from 'react-router-dom';

// for doctor
import DoctorList from './pages/doctor/List';
import DoctorCreate from './pages/doctor/Create';
// for patient
import PatientList from './pages/patient/List';
import PatientCreate from './pages/patient/Create';
// for admin
import AdminCreate from './pages/admin/Create';
import AdminList from './pages/admin/List';
// for bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

import 'bootstrap-icons/font/bootstrap-icons.css';
// for patientprofile

import Patient from './pages/profile/Patient';
import Doctor from './pages/profile/Doctor';
import Admin from './pages/profile/Admin';

// import CreateAppointment from "./pages/appointment/Create"
import AppointmentList from "./pages/appointment/List"
// import AppointmentSchedule from './pages/appointment/AppointmentSchedule';
// import AssignedPatient from './pages/doctor/AssignedPatient';
import AboutUs from './pages/AboutUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/doctor/list",
    element: <DoctorList />,
  },
  {
    path: "/doctor/create",
    element: <DoctorCreate />,
  },
  {
    path: "/patient/list",
    element: <PatientList />,
  },
  {
    path: "/patient/create",
    element: <PatientCreate />,
  },
  {
    path: "/admin/list",
    element: <AdminList />,
  },
  {
    path: "/admin/create",
    element: <AdminCreate />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile/admin",
    element: <Admin />,
  },
  {
    path: "/profile/doctor",
    element: <Doctor />,
  },
  {
    path: "/profile/patient",
    element: <Patient />,
  },
  {
    path: "/appointment/list",
    element: <AppointmentList />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //  <App /> 
  <RouterProvider router={router} />

  // </React.StrictMode>
);

reportWebVitals();
