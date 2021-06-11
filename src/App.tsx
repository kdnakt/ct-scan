import React from 'react';
import './App.css';
import { AppFooter } from './components/AppFooter';
import { AppHeader } from './components/AppHeader';
import { AppImage } from './components/AppImage';
import { AppMain } from './components/AppMain';


function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppMain />
      <AppImage />
      <AppFooter />
    </div>
  );
}

export default App;
