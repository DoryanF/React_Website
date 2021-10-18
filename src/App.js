import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './component/Header';
import Footer from './component/Footer';
import Contact from './component/pages/Contact';
import Home from './component/pages/Home';
import Gallery from './component/pages/Gallery';

import { BrowserRouter,Switch,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

