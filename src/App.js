import React from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import AppContent from './components/AppContent';

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <AppContent />
      <AppFooter />
    </div>
  );
}

export default App;
