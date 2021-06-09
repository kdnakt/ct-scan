import React from 'react';
import './App.css';
import { AppFooter } from './AppFooter';
import { AppHeader } from './AppHeader';
import { AppImage } from './AppImage';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppImage />
      <AppFooter />
    </div>
  );
}

export default App;
