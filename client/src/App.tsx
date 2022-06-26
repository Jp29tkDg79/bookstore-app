import { Fragment } from "react";

import { Autoplay, Pagination, Navigation, Swiper } from "swiper";
import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Auth from "./pages/Auth/Auth";
// error pages
import NotFound from "./errors/NotFound";
// route
import * as ROUTES from "./constants/Routes";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./App.css";

Swiper.use([Autoplay, Pagination, Navigation]);

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Auth />} />
          <Route path={ROUTES.SIGNIN} element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
