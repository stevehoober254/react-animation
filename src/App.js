import './App.scss';
import AnimatedRoutes from './routes/route';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router className="App">
     <AnimatedRoutes/>
    </Router>
  );
}

export default App;
