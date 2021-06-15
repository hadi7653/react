import React from 'react'
import NavBar from './componanats/navbar/NavBar'
import { action, originals , horror, comedy, romance} from './urls'
import './App.css'
import Banner from './componanats/Banner/Banner'
import RowPost from './componanats/RowPost/RowPost'


function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix orginals" />
      <RowPost url={action} title="Action" isSmall  />
      <RowPost url={horror} title="Horror" isSmall  />
      <RowPost url={comedy} title="Comedy" isSmall  />
      <RowPost url={romance} title="romance" isSmall  />
      







    </div>
  );
}

export default App;
