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
import ChoosingTheBestVirtualStaffingAgency from "./Components/Pages/Blog/choosing_the_best_virtual_staffing_agency";
import KeysToConsiderWhenHiringAVirtualAssistant from "./Components/Pages/Blog/keys_to_consider_when_hiring_a_virtual_assistant";
import TenTipsForChoosingTheRightVirtualAssistant from "./Components/Pages/Blog/ten_tips_for_choosing_the_right_virtual_assistant";
import HowToChooseTheRightVirtualAssistantForYourBusinessBoostEfficiencyAndSuccess from "./Components/Pages/Blog/how_to_choose_the_right_virtual_assistant_for_your_business_boost_efficiency_and_success";
import WhyCoreassist from "./Components/Pages/Blog/why_coreassist";
import WhenHiringAVirtualAssistantForYourBusinessThereAreSeveralImportantFactorsToConsiderHereAreSomeKeyPointsToKeepInMind from "./Components/Pages/Blog/when_hiring_a_virtual_assistant_for_your_business_there_are_several_important_factors_to_consider_here_are_some_key_points_to_keep_in_mind";
import AdvantagesOfHiringAVirtualAssistant from "./Components/Pages/Blog/advantages_of_hiring_a_virtual_assistant";
import WhatAreTheBenefitsOfHiringAVirtualAssistant from "./Components/Pages/Blog/what_are_the_benefits_of_hiring_a_virtual_assistant";
import HowToChooseTheRightVirtualAssistantForYourBusiness from "./Components/Pages/Blog/how_to_choose_the_right_virtual_assistant_for_your_business";
import TopTenReasonWhySuccessfulEntrepreneursHireVirtualAssistants from "./Components/Pages/Blog/top_ten_reason_why_successful_entrepreneurs_hire_virtual_assistants";
import TenBenefitsOfHiringAVirtualAssistant from "./Components/Pages/Blog/Ten_benefits_of_hiring_a_virtual_assistant";
import FiveWaysAVirtualAssistantCanMakeYouMoreProductive from "./Components/Pages/Blog/five_ways_a_virtual_assistant_can_make_you_more_productive";
import WhyHireAVirtualAssistant from "./Components/Pages/Blog/why_hire_a_virtual_assistant";
import TheBenefitsOfVirtualAssistantsWhyYouShouldInvestInOneHereAreAFewTipsOnHowYouCanSetUpYourVaForSuccess from "./Components/Pages/Blog/the_benefits_of_virtual_assistants_why_you_should_invest_in_one_here_are_a_few_tips_on_how_you_can_set_up_your_va_for_success";
import TheReturnOfInvestmentWhenHiringAVirtualAdminAssistant from "./Components/Pages/Blog/the_return_of_investment_when_hiring_a_virtual_admin_assistant";
import VirtualAssistantVsEmployeeFiveReasonsWhyARemoteAssistantCanBeTheBestSolution from "./Components/Pages/Blog/virtual_assistant_vs_employee_five_reasons_why_a_remote_assistant_can_be_the_best_solution";
import WhyYourBusinessNeedsAVirtualAssistant from "./Components/Pages/Blog/why_your_business_needs_a_virtual_assistant";
import WhyAVirtualAssistantForEntrepreneursIsAGreatInvestment from "./Components/Pages/Blog/why_a_virtual_assistant_for_entrepreneurs_is_a_great_investment";
import TenReasonsToWorkFromHomeAndImproveProductivity from "./Components/Pages/Blog/ten_reasons_to_work_from_home_and_improve_productivity";
import BenefitsOfOutsourcingToAVirtualAssistant from "./Components/Pages/Blog/benefits_of_outsourcing_to_a_virtual_assistant";
import WhyBusinessOwnersAreChoosingCoreassistVirtualAssistant from "./Components/Pages/Blog/why_business_owners_are_choosing_coreassist_virtual_assistant";
import HowCoreassistVirtualAssistantsHandleYourBusiness from "./Components/Pages/Blog/how_coreassist_virtual_assistants_handle_your_business";
import WhyCoreassistIsYourTopChoice from "./Components/Pages/Blog/why_coreassist_is_your_top_choice";
import TransformYourBusinessWithCoreassistVirtualAssistants from "./Components/Pages/Blog/transform_your_business_with_coreassist_virtual_assistants";

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
        path="/choosing_the_best_virtual_staffing_agency"
        element={<ChoosingTheBestVirtualStaffingAgency />}
      ></Route>
      <Route
        path="/keys_to_consider_when_hiring_a_virtual_assistant"
        element={<KeysToConsiderWhenHiringAVirtualAssistant />}
      ></Route>
      <Route
        path="/ten_tips_for_choosing_the_right_virtual_assistant"
        element={<TenTipsForChoosingTheRightVirtualAssistant />}
      ></Route>
      <Route
        path="/how_to_choose_the_right_virtual_assistant_for_your_business_boost_efficiency_and_success"
        element={
          <HowToChooseTheRightVirtualAssistantForYourBusinessBoostEfficiencyAndSuccess />
        }
      ></Route>
      <Route path="/why_coreassist?" element={<WhyCoreassist />}></Route>
      <Route
        path="/when_hiring_a_virtual_assistant_for_your_business_there_are_several_important_factors_to_consider_here_are_some_key_points_to_keep_in_mind"
        element={
          <WhenHiringAVirtualAssistantForYourBusinessThereAreSeveralImportantFactorsToConsiderHereAreSomeKeyPointsToKeepInMind />
        }
      ></Route>
      <Route
        path="advantages_of_hiring_a_virtual_assistant"
        element={<AdvantagesOfHiringAVirtualAssistant />}
      ></Route>
      <Route
        path="what_are_the_benefits_of_hiring_a_virtual_assistant"
        element={<WhatAreTheBenefitsOfHiringAVirtualAssistant />}
      ></Route>
      <Route
        path="how_to_choose_the_right_virtual_assistant_for_your_business"
        element={<HowToChooseTheRightVirtualAssistantForYourBusiness />}
      ></Route>
      <Route
        path="top_ten_reason_why_successful_entrepreneurs_hire_virtual_assistants"
        element={
          <TopTenReasonWhySuccessfulEntrepreneursHireVirtualAssistants />
        }
      ></Route>
      <Route
        path="Ten_benefits_of_hiring_a_virtual_assistant"
        element={<TenBenefitsOfHiringAVirtualAssistant />}
      ></Route>
      <Route
        path="five_ways_a_virtual_assistant_can_make_you_more_productive"
        element={<FiveWaysAVirtualAssistantCanMakeYouMoreProductive />}
      ></Route>
      <Route
        path="why_hire_a_virtual_assistant"
        element={<WhyHireAVirtualAssistant />}
      ></Route>
      <Route
        path="the_benefits_of_virtual_assistants_why_you_should_invest_in_one_here_are_a_few_tips_on_how_you_can_set_up_your_va_for_success"
        element={
          <TheBenefitsOfVirtualAssistantsWhyYouShouldInvestInOneHereAreAFewTipsOnHowYouCanSetUpYourVaForSuccess />
        }
      ></Route>
      <Route
        path="the_return_of_investment_when_hiring_a_virtual_admin_assistant"
        element={<TheReturnOfInvestmentWhenHiringAVirtualAdminAssistant />}
      ></Route>
      <Route
        path="virtual_assistant_vs_employee_five_reasons_why_a_remote_assistant_can_be_the_best_solution"
        element={
          <VirtualAssistantVsEmployeeFiveReasonsWhyARemoteAssistantCanBeTheBestSolution />
        }
      ></Route>
      <Route
        path="how_coreassist_virtual_assistants_handle_your_business"
        element={<HowCoreassistVirtualAssistantsHandleYourBusiness />}
      ></Route>

      <Route
        path="why_your_business_needs_a_virtual_assistant"
        element={<WhyYourBusinessNeedsAVirtualAssistant />}
      ></Route>
      <Route
        path="why_a_virtual_assistant_for_entrepreneurs_is_a_great_investment"
        element={<WhyAVirtualAssistantForEntrepreneursIsAGreatInvestment />}
      ></Route>
      <Route
        path="ten_reasons_to_work_from_home_and_improve_productivity"
        element={<TenReasonsToWorkFromHomeAndImproveProductivity />}
      ></Route>
      <Route
        path="benefits_of_outsourcing_to_a_virtual_assistant"
        element={<BenefitsOfOutsourcingToAVirtualAssistant />}
      ></Route>
      <Route
        path="benefits_of_outsourcing_to_a_virtual_assistant"
        element={<BenefitsOfOutsourcingToAVirtualAssistant />}
      ></Route>
      <Route
        path="why_business_owners_are_choosing_coreassist_virtual_assistant"
        element={<WhyBusinessOwnersAreChoosingCoreassistVirtualAssistant />}
      ></Route>
      <Route
        path="why_coreassist_is_your_top_choice"
        element={<WhyCoreassistIsYourTopChoice />}
      ></Route>
      <Route
        path="transform_your_business_with_coreassist_virtual_assistants"
        element={<TransformYourBusinessWithCoreassistVirtualAssistants />}
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
