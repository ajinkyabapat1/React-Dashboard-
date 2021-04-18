import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header";
import React, { Fragment } from "react";
import Title from './Component/Title';
import MainLayout from './Component/MainLayout';
import ChartBody from './Component/ChartBody';
import Dashboard from './Component/Dashboard'
function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="container-fluid" style={{ marginTop: 15 }}>
        <Title/>
        <MainLayout/>
        <Dashboard/>
        {/* <ChartBody/> */}
      </div>
    </React.Fragment>
  );
}

export default App;
