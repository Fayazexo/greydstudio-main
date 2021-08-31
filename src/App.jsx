import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavigationMenu from "./components/Nav"
import Preloader from "./components/Preloader"
import ScrollToTopBtn from "./components/ScrollToTop"
import About from "./pages/About"
import Contact from "./pages/Contact"
import detailCase from "./pages/detailCase"
import detailCase1 from "./pages/detailCase1"
import detailCase2 from "./pages/detailCase2"
import detailCase3 from "./pages/detailCase3"
import detailCase4 from "./pages/detailCase4"
import detailCase5 from "./pages/detailCase5"
import Home from "./pages/Home"
import LandOwners from "./pages/LandOwners"
import News from "./pages/News"
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
          <Route path="/detailcase" component={detailCase} />
          <Route path="/detailcase1" component={detailCase1} />
          <Route path="/detailcase2" component={detailCase2} />
          <Route path="/detailcase3" component={detailCase3} />
          <Route path="/detailcase4" component={detailCase4} />
          <Route path="/detailcase5" component={detailCase5} />

          <ScrollToTopBtn />
        </div>
      )}
    </Router>
  )
}

export default App
