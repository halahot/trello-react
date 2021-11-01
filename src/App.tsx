import './App.css';
import { Board} from './components/Board';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div className="App">
      <Header/>
      <Board/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
