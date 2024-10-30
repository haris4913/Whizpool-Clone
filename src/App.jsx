import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs.jsx";
import Layout from './Components/Layout.jsx';
import Home from './Pages/Home.jsx';
import Services from "./Pages/Services.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Products from "./Pages/Products.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        {/* Home route */}
        <Route index element={<Home />} />

        <Route path="" element={<Home />} />

        {/* About Us route */}
        <Route path="about" element={<AboutUs />} />

        <Route path="products" element={<Products />} />

        {/* Services route */}
        <Route path="services" element={<Services />} />

        <Route path="contact" element={<ContactUs />} />

      </Route>
    </>
  )
);

export default router;