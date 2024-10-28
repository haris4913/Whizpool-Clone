import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs.jsx";
import Layout from './Components/Layout.jsx';
import Home from './Pages/Home.jsx';
import Test from './Pages/Test.jsx';
import Services from "./Pages/Services.jsx";
import Blogs from "./Pages/Blogs.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import CyberSecurity from "./Pages/CyberSecurity.jsx";
import Engagment from "./Pages/Engagment.jsx";
import Integrations from "./Pages/Integrations.jsx";
import Security from "./Pages/Security.jsx";
import Automations from "./Pages/Automations.jsx";
import Products from "./Pages/Products.jsx";
import Careers from "./Pages/Careers.jsx";
import Testimonials from "./Pages/Testimonials.jsx";

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

        <Route path="products" element={<Products />} />
        <Route path="careers" element={<Careers />} />
        <Route path="testimonials" element={<Testimonials />} />

        {/* Services route with nested routing */}
        <Route path="services" element={<Services />}>
          <Route path="/services/cybersecurity" element={<CyberSecurity />} />
          <Route path="/services/engagement" element={<Engagment />} />
          <Route path="/services/security" element={<Security />} />
          <Route path="/services/integrations" element={<Integrations />} />
          <Route path="/services/automations" element={<Automations />} />
        </Route>

        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<ContactUs />} />

      </Route>
    </>
  )
);

export default router;