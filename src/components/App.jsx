import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout/Layout";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("pages/AboutPage/AboutPage"));
const AboutId = lazy(() => import("pages/AboutId/AboutId"));
const ClientsPage = lazy(() => import("pages/ClientsPage/ClientsPage"));
const ContactsPage = lazy(() => import("pages/ContactsPage/ContactsPage"));

function App() {
  return (
    <Suspense fallback="loading">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about/:id" element={<AboutId />} />
          <Route path="gallery" element={<AboutPage />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
