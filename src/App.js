
import { useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import { Theme } from './Theme';
import Main from './Main/Main';
function App() {
  const[DarkTheme,setDarkTheme]=useState(true);
  return (
    <Theme.Provider value={{DarkTheme,setDarkTheme}}>
    <div className="App">
      <Navigation></Navigation>
      <Main></Main>
    </div>
    </Theme.Provider>
  );
}

export default App;
