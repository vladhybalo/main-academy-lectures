import { Component, useState, useEffect } from 'react'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Range from './components/Range';

import Router from './Router';
import './App.css'

function App() {


  return (
    <div className="App">
      <Header></Header>
      <Router></Router>
      <Range></Range>
      <Footer></Footer>
    </div>
  )
}

export default App
