import styled from 'styled-components';
import './App.css';
import { Board } from './components/Board';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Board />
      </Container>
      <GlobalStyle />
    </div>
  );
}

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`

export default App;
