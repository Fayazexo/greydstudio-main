import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationMenu from "./components/Nav";
import Preloader from "./components/Preloader";
import ScrollToTopBtn from './components/ScrollToTop';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Case from "./pages/detailCase";
import Case1 from "./pages/detailCase1";
import Case2 from "./pages/detailCase2";
import Case3 from "./pages/detailCase3";
import Newsdetail from "./pages/detailNews";
import Home from "./pages/Home";
import News from "./pages/News";
import Work from "./pages/works";
import "./styles/animated-on3step.css";
import "./styles/main.scss";




function App() {
  const [loading, setLoading] = useState(true);
  const [navBackground, setNavBack] = useState(false);

  useEffect(() => {
    fetch("http://139.59.247.91/greydstudios")
    .then(response => response.json())
    .then(data => {
      const status = data[0].status
      if(status){
        setLoading(false)
      } else {
        setLoading(true);
      }
    })
  }, [loading]);
  
  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <div className="App">
          <NavigationMenu
            firstTime={loading}
            hasBackground={navBackground}
            setBackground={state => setNavBack(state)}
          />
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Work" exact component={Work} />
          <Route path="/News" exact component={News} />
          <Route path="/Contact" exact component={Contact} />
          <Route
            path="/detailcase"
            component={() => (
              <Case setNavBackground={state => setNavBack(state)} />
            )}
          />
          <Route
            path="/detailcase1"
            component={() => (
              <Case1 setNavBackground={state => setNavBack(state)} />
            )}
          />
          <Route
            path="/detailcase2"
            component={() => (
              <Case2 setNavBackground={state => setNavBack(state)} />
            )}
          />
          <Route
            path="/detailcase3"
            component={() => (
              <Case3 setNavBackground={state => setNavBack(state)} />
            )}
          />
          <Route
            path="/detailNews"
            component={() => (
              <Newsdetail setNavBackground={state => setNavBack(state)} />
            )}
          />
          
        <ScrollToTopBtn />  
        </div>
      )}
    </Router>
  );
}

export default App;