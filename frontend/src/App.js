import 'semantic-ui-css/semantic.min.css'
import Headers from './HomePage/Header'
import Footer from './HomePage/Footer'
import { BrowserRouter, Route } from 'react-router-dom'
import Body from './HomePage/Body'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Headers />
        <Route exact path='/' component={Body} />
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
