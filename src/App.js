import React, { Component } from "react"; 

import "./styles.css";

import api from "./services/api";

import Header from "./components/Header.js";

import Main from "./pages/main";

const App = () => (
   <div className="App">
    <Header />
    <Main />
    </div>
);

export default App;


