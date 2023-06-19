import React from "react";
import Navigation from "./Components/Navigation/Navigation";
import "./css/App.scss";
import Home from "./Components/Pages/Home";
import WhatWeDo from "./Components/Pages/What_we_do";
import Pricing from "./Components/Pages/Pricing";
import ContactUs from "./Components/Pages/Contact_us";
import Careers from "./Components/Pages/Careers";
import Login from "./Components/Pages/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import PrivateRoute from "./Components/Pages/Private_route";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./Components/Auth/Auth_context";
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/home',
//     element: <Home />,
//   },
//   {
//     path: '/what_we_do',
//     element: <WhatWeDo />,
//   },
//   {
//     path: '/pricing',
//     element: <Pricing />,
//   },
//   {
//     path: '/contact_us',
//     element: <ContactUs />,
//   },
//   {
//     path: '/careers',
//     element: <Careers />,
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   },
//   {
//     path: '/dashboard',
//     element: <Dashboard />,
//   },
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/what_we_do" element={<WhatWeDo />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact_us" element={<ContactUs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Route>
  )
);

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
      <RouterProvider router={router}></RouterProvider>
      <AuthProvider></AuthProvider>
    </AuthProvider>
  );
};
export default App;
