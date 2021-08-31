import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavigationMenu from "./components/Nav"
import Preloader from "./components/Preloader"
import ScrollToTopBtn from "./components/ScrollToTop"
import About from "./pages/About"
import akramalikhanint from "./pages/akramalikhan-int"
import Contact from "./pages/Contact"
import emonint from "./pages/emon-int"
import Home from "./pages/Home"
import kalamint from "./pages/kalam-int"
import LandOwners from "./pages/LandOwners"
import mahadinfarahint from "./pages/mahadi&farah-int"
import marufint from "./pages/maruf-int"
import mehreenint from "./pages/mehreen-int"
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
          <Route path="/kalam-interior" component={kalamint} />
          <Route path="/emon-interior" component={emonint} />
          <Route path="/akramalikhan-interior" component={akramalikhanint} />
          <Route path="/maruf-interior" component={marufint} />
          <Route path="/mehreen-interior" component={mehreenint} />
          <Route path="/mahadi&farah-interior" component={mahadinfarahint} />

          <ScrollToTopBtn />
        </div>
      )}
    </Router>
  )
}

export default App
