import React from "react"
import Reveal from "react-reveal/Reveal"
import { withRouter } from "react-router-dom"
import Abouthome from "../components/Abouthome"
import Carouselfeature from "../components/Carouselfeature"
import Carouselprojects from "../components/Carouselprojects"
import Footer from "../components/Footer"
import Slider from "../components/Sliderhome"
import TeamsCor from "../components/TeamsCor"
import { Efect } from "../styles/effect.styles"

const Home = ({ history }) => {
  return (
    <div>
      <Efect />

      <Reveal effect="fadeIn">
        <section className="jumbotron jumbomain">
          <Slider />
        </section>
      </Reveal>

      {/* <Featurehome /> */}

      <Reveal effect="fadeInUp">
        <Abouthome />
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid">
          <div className="row m-2-hor">
            <div className="col-12">
              <div className="heading">What we have expertise on</div>
            </div>
            <div className="col-12">
              <Carouselfeature />
            </div>
          </div>
        </section>
      </Reveal>

      {/* <Reveal effect="fadeInUp">
        <section className="container-fluid py-0">
          <div className="row m-2-hor">
            <div className="col-12">
              <Carouselclient />
            </div>
          </div>
        </section>
      </Reveal> */}

      {/* <Reveal effect="fadeInUp">
        <section className="container-fluid">
          <div className="row m-2-hor">
            <div className="col-12">
              <Carouselclientb />
            </div>
          </div>
        </section>
      </Reveal> */}

      <Reveal effect="fadeInUp">
        <section className="container-fluid py-0">
          <div className="row m-2-hor">
            <div className="col-12">
              <div className="heading">Projects we worked on</div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-0">
              <Carouselprojects />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid">
          <div className="row m-2-hor">
            <div className="col-12">
              <div className="heading">Meet our team</div>
            </div>
            <div className="col-12">
              <TeamsCor />
            </div>
          </div>
        </section>
      </Reveal>

      {/*<Reveal effect="fadeInUp">
        <Accomplish />
    </Reveal>*/}

      {/* <Reveal effect="fadeInUp">
        <section className="container-fluid pt-0">
          <div className="row m-2-hor">
            <div className="col-12">
              <div className="heading">Events</div>
            </div>
            <div className="col-12">
              <Carouselnews />
            </div>
          </div>
        </section>
      </Reveal> */}

      <Footer />
    </div>
  )
}

export default withRouter(Home)
