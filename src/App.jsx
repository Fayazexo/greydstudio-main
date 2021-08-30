import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavigationMenu from "./components/Nav"
import Preloader from "./components/Preloader"
import ScrollToTopBtn from "./components/ScrollToTop"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Case from "./pages/detailCase"
import Case1 from "./pages/detailCase1"
import Case2 from "./pages/detailCase2"
import Case3 from "./pages/detailCase3"
import Newsdetail from "./pages/detailNews"
import Home from "./pages/Home"
import LandOwners from "./pages/LandOwners"
import Projects from "./pages/Projects"
import Teams from "./pages/Teams"
import "./styles/animated-on3step.css"
import "./styles/main.scss"

function App() {
  const [loading, setLoading] = useState(false)
  const [navBackground, setNavBack] = useState(false)

  useEffect(() => {
    fetch("https://api.nodecandy.com/site-access-validations?key=grey-d-studio")
      .then((response) => response.json())
      .then((data) => {
        const status = data[0].status
        const message = data[0].message
        if (!status) {
          alert(message)
        }
        console.log(`%c${message}`, `color:red`)
        if (status) {
          setLoading(false)
        } else {
          setLoading(true)
        }
      })
  }, [loading])

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <div className="App">
          <NavigationMenu
            firstTime={loading}
            hasBackground={navBackground}
            setBackground={(state) => setNavBack(state)}
          />
          <Route path="/" exact component={Home} />
          <Route path="/About" exact component={About} />
          <Route path="/Projects" exact component={Projects} />
          <Route path="/News" exact component={News} />
          <Route path="/Teams" exact component={Teams} />
          <Route path="/LandOwners" exact component={LandOwners} />
          <Route path="/Contact" exact component={Contact} />
          <Route
            path="/detailcase"
            component={() => (
              <Case setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/detailcase1"
            component={() => (
              <Case1 setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/detailcase2"
            component={() => (
              <Case2 setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/detailcase3"
            component={() => (
              <Case3 setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/detailNews"
            component={() => (
              <Newsdetail setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/detailcase4"
            component={() => (
              <Case1 setNavBackground={(state) => setNavBack(state)} />
            )}
          />
          <Route
            path="/detailcase5"
            component={() => (
              <Case1 setNavBackground={(state) => setNavBack(state)} />
            )}
          />

          <ScrollToTopBtn />
        </div>
      )}
    </Router>
  )
}

export default App
