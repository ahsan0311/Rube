import React, { Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/Loader";
import ScrollToTop from "../components/ScrollToTop";

// Lazy imports
const Home = React.lazy(() => import("../pages/home/home"));
const About = React.lazy(() => import("../pages/about/about"));
const Contact = React.lazy(() => import("../pages/contact/contact"));
const MsOffice = React.lazy(() => import("../pages/courses/msOffice"));
const Office_graphic = React.lazy(() => import("../pages/courses/office_graphic"));
const Graphic = React.lazy(() => import("../pages/courses/graphic"));
const DigitialMarketing = React.lazy(() => import("../pages/courses/digitialMarketing"));
const Daraz = React.lazy(() => import("../pages/courses/daraz"));
const Shopify = React.lazy(() => import("../pages/courses/shopify"));
const WebDesign = React.lazy(() => import("../pages/courses/webDesign"));
const WebDevelopment = React.lazy(() => import("../pages/courses/webDevelopment"));
const WordPress = React.lazy(() => import("../pages/courses/wordpress"));
const VideoEditing = React.lazy(() => import("../pages/courses/videoEditing"));
const ComputerTyping = React.lazy(() => import("../pages/courses/computerTyping"));
const EnglishLanguage = React.lazy(() => import("../pages/courses/englishLanguage"));
const Carriers = React.lazy(() => import("../pages/carriers/carriers"));
const AutoCard = React.lazy(() => import("../pages/courses/autocad"));
const ThreeDMax = React.lazy(() => import("../pages/courses/3dMax"));
const Mern = React.lazy(() => import("../pages/courses/Mern"));

const AppRoutes = () => {
  const [loading, setLoading] = useState(true);

  const handleLoaderFinish = () => setLoading(false);

  if (loading) return <Loader onFinish={handleLoaderFinish} />;

  return (
    <Suspense fallback={<Loader />}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Career" element={<Carriers />} />

        {/* Courses */}
        <Route path="/ms-office" element={<MsOffice />} />
        <Route path="/ms-office-graphic" element={<Office_graphic />} />
        <Route path="/graphic" element={<Graphic />} />
        <Route path="/digital-marketing-smartpro" element={<DigitialMarketing />} />
        <Route path="/daraz" element={<Daraz />} />
        <Route path="/shopify" element={<Shopify />} />
        <Route path="/web-designing" element={<WebDesign />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/wordpress" element={<WordPress />} />
        <Route path="/video-editing" element={<VideoEditing />} />
        <Route path="/computer-typing" element={<ComputerTyping />} />
        <Route path="/english-language" element={<EnglishLanguage />} />
        <Route path="/autocad" element={<AutoCard />} />
        <Route path="/3d-max" element={<ThreeDMax />} />
        <Route path="/mern-stack" element={<Mern />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
