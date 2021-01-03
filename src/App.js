import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './components/NavBar'
import Container from './components/Container'

function App() {
  return (
    <Router>
      <NavBar/>
      <Container/>
    </Router>
  );
}

export default App;
