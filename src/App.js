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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/region">
            <Table />
          </Route >

          <Route path="/guide">
            <Guide />
          </Route>

          <Route path="/construction">
            <Construction />
          </Route>

        </Switch>

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
        <meta
          name="og:type"
          content="website"
        />
        <meta
          name="og:title"
          content={`Les Merisiers | ${t("titles.home")}`}
        />
        <meta
          name="og:description"
          content={t("descriptions.home")}
        />
        <meta
          name="fb:app_id"
          content="1014602092227501"
        />
        <meta
          name="og:image"
          content="https://i.imgur.com/jvxpd68.jpg"
        />
        <meta
          name="og:url"
          content="https://lesmerisiers.com"
        />
        <script className="structured-data-list" type="application/ld+json">
          {structuredJSON}
        </script>
      </Helmet>
    </Router>
  );
}
