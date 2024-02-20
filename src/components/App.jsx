import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout/Layout";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("pages/AboutPage/AboutPage"));
const ClientsPage = lazy(() => import("pages/ClientsPage/ClientsPage"));
const ContactsPage = lazy(() => import("pages/ContactsPage/ContactsPage"));
const GalleryPage = lazy(() => import("pages/GalleryPage/GalleryPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));

function App() {
  return (
    <Suspense fallback="loading">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;