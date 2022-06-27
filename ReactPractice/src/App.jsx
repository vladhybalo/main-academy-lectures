import { Component, useState, useEffect } from 'react'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Router from './Router';
import './App.css'

function App() {


  return (
    <div className="App">
      <Header></Header>
      <Router></Router>
      {/* <MultiView catalog={items} loading={loading}></MultiView>
      {!!items.length && <SingleView item = {items[1]} photos = {items[1].pictures}/> } */}
      <Footer></Footer>
    </div>
  )
}

export default App
