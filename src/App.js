import React from "react";
import NavBar from "./components/NavBar"
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Guide from "./components/Guide/Guide";
import Footer from "./components/Footer";
import Layout from "./components/Layout"
import Table from "./components/Table/Table"
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
        </Switch>
        <SocialNetwork />
        <Footer />
      </Layout>
    </Router>
  );
}