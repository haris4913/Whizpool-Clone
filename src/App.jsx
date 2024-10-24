import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs.jsx";
import Layout from './Components/Layout.jsx';
import Home from './Pages/Home.jsx';
import Test from './Pages/Test.jsx';
import Services from "./Pages/Services.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        {/* Home route */}
        <Route index element={<Home />} />
        
        {/* About Us route with a nested Test route */}
        <Route path="about" element={<AboutUs />}>
          <Route path="test" element={<Test />} />
        </Route>

        {/* Services route */}
        <Route path="services" element={<Services />} />
      </Route>
    </>
  )
);

export default router;