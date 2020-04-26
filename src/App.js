import React from "react";
import NavBar from "./components/NavBar"
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Guide from "./components/Guide/Guide";
import Footer from "./components/Footer";
import Layout from "./components/Layout"
import Table from "./components/Table/Table";
import GiteDetails from "./components/GiteDetails";
import SocialNetwork from "./components/SocialMedia";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function App() {
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

          <Route path="/sejour">
            <Guide />
          </Route>

          <Route path="/gite4a6">
            <GiteDetails title="Gîte 4 à 6 personnes" />
          </Route>

          <Route path="/gite8a10">
            <GiteDetails title="Gîte 8 à 10 personnes" />
          </Route>

          <Route path="/gite12a16">
            <GiteDetails title="Gîte 12 à 16 personnes" />
          </Route>

        </Switch>

        <SocialNetwork />
        <Footer />

      </Layout>
    </Router>
  );
}