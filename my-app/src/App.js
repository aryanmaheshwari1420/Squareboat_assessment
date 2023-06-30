import React, { Component } from 'react';
import NavBar from './components/Navbar';
import News from './components/News';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="navy-background">
          <News />
        </div>
      </div>
    );
  }
}
