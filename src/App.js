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
import DiscoverTheNextLevelOfVirtualAssistantWithCoreassist from "./Components/Pages/Blog/discover_the_next_level_of_virtual_assistant_with_coreassist";
import UnlockingTheFullPotentialOfYourVirtualAssistant from "./Components/Pages/Blog/unlocking_the_full_potential_of_your_virtual_assistant";
import MakingTheRightChoice from "./Components/Pages/Blog/making_the_right_choice";
import ReasonsWhyBusinessOwnersSwitchToAVirtualAssistant from "./Components/Pages/Blog/reasons_why_business_owners_switch_to_a_virtual_assistant";
import ThingsToConsiderInLookingForTheBestRecruitingAgency from "./Components/Pages/Blog/things_to_consider_in_looking_for_the_best_recruiting_agency";
import BenefitsOfHiringVirtualAssistant from "./Components/Pages/Blog/benefits_of_hiring_virtual_assistant";
import ChoosingThePerfectVirtualRecruitnentAgency from "./Components/Pages/Blog/choosing_the_perfect_virtual_recruitnent_agency";
import WhatAreTheImportantThingsToConsiderInHiringPerfectVirtualAssistants from "./Components/Pages/Blog/what_are_the_important_things_to_consider_in_hiring_perfect_virtual_assistants";
import GrowYourBusinessWithUs from "./Components/Pages/Blog/grow_your_business_with_us";
import WhyBusinessOwnersChooseVirtualAssistants from "./Components/Pages/Blog/why_business_owners_choose_virtual_assistants";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
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
        path="/discover_the_next_level_of_virtual_assistance_with_coreAssist_unleashing_exceptional_services_and_talent"
        element={<DiscoverTheNextLevelOfVirtualAssistantWithCoreassist />}
      ></Route>
      <Route
        path="/unlocking_the_full_potential_of_your_virtual_assistant_invaluable_insights_and_strategies_for_seamless_collboration_and_productivity"
        element={<UnlockingTheFullPotentialOfYourVirtualAssistant />}
      ></Route>
      <Route
        path="/making_the_right_choice_expert_insights_for_deciding_between_a_virtual_assistant_remote_team_member"
        element={<MakingTheRightChoice />}
      ></Route>
      <Route
        path="/reasons_why_business_owners_switch_to_a_virtual_assistant"
        element={<ReasonsWhyBusinessOwnersSwitchToAVirtualAssistant />}
      ></Route>
      <Route
        path="/things_to_consider_in_looking_for_the_best_recruiting_agency"
        element={<ThingsToConsiderInLookingForTheBestRecruitingAgency />}
      ></Route>
      <Route
        path="/benefits_of_hiring_virtual_assistant"
        element={<BenefitsOfHiringVirtualAssistant />}
      ></Route>
      <Route
        path="/choosing_the_perfect_virtual_recruitnent_agency"
        element={<ChoosingThePerfectVirtualRecruitnentAgency />}
      ></Route>

      <Route
        path="/what_are_the_important_things_to_consider_in_hiring_perfect_virtual_assistants"
        element={
          <WhatAreTheImportantThingsToConsiderInHiringPerfectVirtualAssistants />
        }
      ></Route>

      <Route
        path="/grow_your_business_with_us"
        element={<GrowYourBusinessWithUs />}
      ></Route>

      <Route
        path="/why_business_owners_choose_virtual_assistants"
        element={<WhyBusinessOwnersChooseVirtualAssistants />}
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
