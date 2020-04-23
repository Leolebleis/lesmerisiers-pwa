import React from "react";
import Header from "./components/Header";
import PetitFute from "./components/PetitFute";
import Footer from "./components/Footer";
import Layout from "./components/Layout"
import Table from "./components/Table/Table"

export default function App() {
  return (
    <Layout>
      <Header />
      <Table />
      <PetitFute />
      <Footer />
    </Layout>
  );
}