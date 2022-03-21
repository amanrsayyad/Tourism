import React, { Suspense, lazy } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Callnow from "./Common/Call Now/Callnow";
import Spinner from "./Common/Spinner/Spinner";

const Home = lazy(() => import("./Pages/Home"));
const Gallery = lazy(() => import("./Component/Gallery/Gallery"));
const Aboutpage = lazy(() => import("./Component/AboutPage/Aboutpage"));
const Tour = lazy(() => import("./Pages/Tour"));
const Blogpage = lazy(() => import("./Component/Blogpage/Blogpage"));
const MainTour = lazy(() => import("./Component/MainTour/MainTour"));

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Callnow />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/About" element={<Aboutpage />} />
            <Route path="/Tour" element={<Tour />} />
            <Route path="/Blogpage" element={<Blogpage />} />
            <Route path="/MainTour" element={<MainTour />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
