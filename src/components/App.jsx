import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import { AnimatePresence } from "framer-motion";
import Loader from "./Loader/Loader";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("pages/AboutPage/AboutPage"));
const AboutId = lazy(() => import("pages/AboutId/AboutId"));
const ReviewsPage = lazy(() => import("pages/ReviewsPage/ReviewsPage"));
const ClientsPage = lazy(() => import("pages/ClientsPage/ClientsPage"));
const ContactsPage = lazy(() => import("pages/ContactsPage/ContactsPage"));
const SendPage = lazy(() => import("pages/SendPage/SendPage"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="about/:id" element={<AboutId />} />
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="clients" element={<ClientsPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="email" element={<SendPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>{" "}
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
