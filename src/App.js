import React from "react";
import NavBar from "./components/NavBar"
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Guide from "./components/Guide/Guide";
import Construction from "./components/Construction/Construction"
import Footer from "./components/Footer";
import Layout from "./components/Layout"
import Table from "./components/Table/Table";
import SocialNetwork from "./components/SocialMedia";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next"

export default function App() {
  const structuredJSON = JSON.stringify(require("./assets/meta-google-headers.json"));

  const { t } = useTranslation("utils");

  return (
    <Router>
      <Layout>
        <NavBar />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/region" element={<Table />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/construction" element={<Construction />} />
        </Routes>

        <SocialNetwork />
        <Footer />

      </Layout>


      {/* Meta tags for Open Graph/Google SEO */}
      <Helmet>
        <title>Les Merisiers | {t("titles.home")}</title>
        <meta
          name="description"
          content={t("descriptions.home")}
        />
        <script className="structured-data-list" type="application/ld+json">
          {structuredJSON}
        </script>
      </Helmet>
    </Router>
  );
}
