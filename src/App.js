import React, { useEffect } from "react";
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
import Blog from "./Components/Pages/Blog";
import WhatAVirtualAssistantCanDo from "./Components/Pages/Blog/what_a_virtual_assistant_can_do";
import AdvantagesAndBenefitsOfHiringAVirtualAssistant from "./Components/Pages/Blog/advantages_and_benefits_of_hiring_a_virtual_Assistant";
import Testimonials from "./Components/Pages/Blog/testimonials";
import GainAComprehensiveUnderstanding from "./Components/Pages/Blog/gain_a_comprehensive_understanding";
import NavigatingTheVirtualWorld from "./Components/Pages/Blog/navigating_the_virtual_world";
import YourPerfectMatch from "./Components/Pages/Blog/your_perfect_match";
import UnlockingSuccess from "./Components/Pages/Blog/unlocking_success";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { AuthProvider } from "./Components/Auth/Auth_context";
import ReactGa from "react-ga";

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
      <Route path="/blog" element={<Blog />} />
      {/* blog */}
      <Route
        path="/what_a_virtual_assistant_can_do"
        element={<WhatAVirtualAssistantCanDo />}
      />
      <Route
        path="/advantages_and_benefits_of_hiring_a_virtual_assistant"
        element={<AdvantagesAndBenefitsOfHiringAVirtualAssistant />}
      />
      <Route path="/testimonials" element={<Testimonials />}></Route>
      <Route
        path="/gain_a_comprehensive_understanding_of_the_coreassist_process"
        element={<GainAComprehensiveUnderstanding />}
      ></Route>
      <Route
        path="/navigation_the_virtual_world_frequently_asked_question_for_collaborating_with_remote_professionals"
        element={<NavigatingTheVirtualWorld />}
      ></Route>
      <Route
        path="/your_perfect_match_valuable_tips_for_a_successfull_virtual_collaboration"
        element={<YourPerfectMatch />}
      ></Route>
      <Route
        path="/unlocking_success_expert_tips_for_identifying_the_perfect_candidates_for_your_business_needs"
        element={<UnlockingSuccess />}
      ></Route>
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
  useEffect(() => {
    ReactGa.initialize("G-HYCJBQS7TF");
    ReactGa.pageview(window.location.pathname);
  }, []);
  return (
    <AuthProvider>
      <Navigation />
      <RouterProvider router={router}></RouterProvider>
      <AuthProvider></AuthProvider>
    </AuthProvider>
  );
};
export default App;
