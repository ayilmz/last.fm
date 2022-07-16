import './App.css';

import {Header} from "./components/Header"
import {ArtistList} from "./components/ArtisList"

function App() {
  return (
    <div className="App">
        <Header />
        <ArtistList />
    </div>
  );
}

export default App;
