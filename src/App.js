import './App.css';

import {Header} from './components/header/index'
import {Section} from './components/section/index'
import {AreaTabela} from './components/areaTabela/index'

function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <AreaTabela/>
    </div>
  );
}

export default App;
