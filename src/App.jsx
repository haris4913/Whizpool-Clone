import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs.jsx";
import Layout from './Components/Layout.jsx';
import Home from './Pages/Home.jsx';
import Test from './Pages/Test.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutUs />}>
          <Route path="test" element={<Test />} />
        </Route>
      </Route>

    </>
  )
);

export default router;
