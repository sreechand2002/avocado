import 'semantic-ui-css/semantic.min.css'
import Headers from './HomePage/Header'
import MobileHeader from './HomePage/MobileHeader'
import MobileFooter from "./HomePage/MobileFooter";
import Footer from './HomePage/Footer'
import About from './AboutUs'
import ContactUs from './ContactUs'
import OurService from './OurServices'
import { BrowserRouter, Route } from 'react-router-dom'
import Body from './HomePage/Body'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MobileHeader />
        <Headers />
        <Route exact path='/' component={Body} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contactus' component={ContactUs} />
        <Route exact path='/services' component={OurService} />
        <MobileFooter />
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
