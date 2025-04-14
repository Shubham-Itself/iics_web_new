
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import HomeOne from "./components/homes/home";
import Wrapper from "./layouts/Wrapper";
import HomeTwo from "./components/homes/home-2"; 
import HomeThree from "./components/homes/home-3";
import HomeFour from "./components/homes/home-4";
import HomeFive from "./components/homes/home-5";
import Courses from "./components/courses";
import CoursesGrid from "./components/courses-grid";
import CoursesList from "./components/courses-list";
import CoursesDetails from "./components/courses-details";
import CoursesDetailsTwo from "./components/courses-details-2";
import Event from "./components/event";
import EventDetails from "./components/event-details";
import ShopGrid from "./components/shop-grid";
import ShopList from "./components/shop-list";
import ShopLeftSidebar from "./components/shop-left-sidebar";
import ShopRightSidebar from "./components/shop-right-sidebar";
import ShopDetails from "./components/shop-details";
import ShopCart from "./components/shop-cart";
import Checkout from "./components/checkout";
import About from "./components/about";
import Instructor from "./components/instructor";
import InstructorDetails from "./components/instructor-details";
import Program from "./components/program";
import ProgramDetails from "./components/program-details";
import News from "./components/news";
import NewsDetails from "./components/news-details";
import Gallery from "./components/gallery";
import Pricing from "./components/pricing";
import Faq from "./components/faq";
import SignIn from "./components/sign-in";
import Register from "./components/register";
import NotFound from "./components/Error";
import Contact from "./components/contact";

import Management from "./components/managment";
import StakeHolder from "./components/stake-holders";
import ChiefMentors from "./components/chief-mentor";
import IndustryMentors from "./components/industry-mentor";
import InternationMentors from "./components/international-mentor";
import Campus from "./components/campus";
import Partners from "./components/partner";
import PressMedia from "./components/press-media";
import Workshop from "./components/workshop";
import Career from "./components/career";
import HowToApply from "./components/how-to-apply";
import EntranceProcess from "./components/entranceProcess";
import FeesSupport from "./components/fess-student-support";
import EligibilityCriteria from "./components/eligibilityCriteria";
import SamplePaper from "./components/sample-paper";
import Prospectus from "./components/prospectus";
import PublicNotes from "./components/public-notes";


const router = createBrowserRouter([
  { path: "/", element: <HomeOne /> },
  { path: "/home-2", element: <HomeTwo /> },
  { path: "/home-3", element: <HomeThree /> },
  { path: "/home-4", element: <HomeFour /> },
  { path: "/home-5", element: <HomeFive /> },
  { path: "/courses", element: <Courses /> },
  { path: "/courses-grid", element: <CoursesGrid /> },
  { path: "/courses-list", element: <CoursesList /> },
  { path: "/courses-details", element: <CoursesDetails /> },
  { path: "/courses-details-2", element: <CoursesDetailsTwo /> },
  { path: "/event", element: <Event /> },
  { path: "/event-details", element: <EventDetails /> },
  { path: "/shop-grid", element: <ShopGrid /> },
  { path: "/shop-list", element: <ShopList /> },
  { path: "/shop-left-sidebar", element: <ShopLeftSidebar /> },
  { path: "/shop-right-sidebar", element: <ShopRightSidebar /> },
  { path: "/shop-details", element: <ShopDetails /> },
  { path: "/shop-cart", element: <ShopCart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/about", element: <About /> }, 
  { path: "/leaders", element: <Instructor /> }, 
  { path: "/details", element: <InstructorDetails /> }, 
  { path: "/program", element: <Program /> }, 
  { path: "/program-details", element: <ProgramDetails /> }, 
  { path: "/news", element: <News /> }, 
  { path: "/news-details", element: <NewsDetails /> }, 
  { path: "/gallery", element: <Gallery /> }, 
  { path: "/pricing", element: <Pricing /> }, 
  { path: "/faq", element: <Faq /> }, 
  { path: "/sign-in", element: <SignIn /> }, 
  { path: "/register", element: <Register /> }, 
  { path: "/contact", element: <Contact /> }, 
  { path: "/management", element: <Management /> }, 
  { path: "/stakeHolders", element: <StakeHolder /> }, 
  { path: "/chiefMentors", element: <ChiefMentors /> }, 
  { path: "/industryMentors", element: <IndustryMentors /> }, 
  { path: "/internationalMentors", element: <InternationMentors /> }, 
  { path: "/courses-details/:courseTitle", element: <CoursesDetails /> },
  { path: "/press-media", element: <PressMedia /> },
  { path: "/workshop", element: <Workshop /> },
  { path: "/event", element: <Workshop /> },
  { path: "/careers", element: <Career /> },
  { path: "/how-to-apply", element: <HowToApply /> },
  { path: "/entranceProcess", element: <EntranceProcess /> },
  { path: "/fees&studentSupport", element: <FeesSupport /> },
  { path: "/eligibilityCriteria", element: <EligibilityCriteria /> },
  { path: "/samplePaper", element: <SamplePaper /> },
  { path: "/prospectus", element: <Prospectus /> },
  { path: "/publicNotes", element: <PublicNotes /> },

  { path: "/details/:title", element: <InstructorDetails /> }, 













  

  { path: "/campus", element: <Campus /> }, 

  { path: "/partners", element: <Partners /> }, 


  








  { path: "*", element: <NotFound /> },
]);


function App() {

  return (
    <Wrapper> 
      <RouterProvider router={router} />
    </Wrapper>
  )
}

export default App
