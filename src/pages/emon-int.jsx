import React, { Component, createRef, Fragment } from "react"
import Reveal from "react-reveal/Reveal"
import { withRouter } from "react-router"
import Footer from "../components/Footer"
import {
  BackArrow,
  BackButton,
  CaseWrapper,
  ClientTag,
  Hero,
  TechniqueTitle,
  Title,
} from "../styles/Case.styles"
import { Efectr, Efectr1, Efectr2 } from "../styles/effect.styles"

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location])
  return children
}

class Case extends Component {
  constructor(props) {
    super(props)
    this.introRef = createRef()

    this.state = {
      toBack: false,
      introTop: 0,
      hasBackground: false,
      animateCase: "",
    }
  }

  componentDidUpdate() {
    if (this.state.toBack) {
      setTimeout(() => {
        this.props.history.push("/projects")
      }, 400)
    }
    if (this.state.animateCase) {
      setTimeout(() => {
        this.props.history.push(this.state.animateCase)
        window.scrollTo(0, 0)
      }, 400)
    }
  }

  render() {
    return (
      <Fragment>
        <Efectr />
        <Efectr1 />
        <Efectr2 />
        <ScrollTop>
          <CaseWrapper>
            <Reveal effect="fadeIn">
              <Hero
                className="mainhero"
                style={{
                  backgroundImage:
                    "url('./img/projects/big/Project-Cover-Emon-Interior.jpg')",
                }}
              >
                <div className="herocaption">
                  <BackButton
                    className="backdetail"
                    onClick={() =>
                      this.setState({ toBack: true, hasBackground: false })
                    }
                    toBack={this.state.toBack}
                    hasBackground={this.state.hasBackground}
                  >
                    <BackArrow src="./img/back.png" alt="Back to Projects" />
                    <span>Back </span>
                  </BackButton>
                  <ClientTag>INTERIOR</ClientTag>
                  <Title>Emon</Title>
                  <TechniqueTitle></TechniqueTitle>
                </div>
              </Hero>
            </Reveal>

            <section className="container-fluid" id="detailproject">
              <div className="row m-2-hor">
                <div className="col-md-8">
                  <p className="content">
                    The large wood panel of this entertainment unit is what
                    gives it the classic, warm feel. the drawers and cupboards
                    ensure that there is plenty of storage for all your
                    electronics and knick-knacks. go for this classic wood and
                    white combo or pick shades that go well with the rest of
                    your decor
                  </p>
                </div>
                <div className="col-md-4 sticky">
                  <ul className="detailproject">
                    <li>
                      <span className="tile">Categories:</span>
                      <span>Interiors</span>
                    </li>
                    <li>
                      <span className="tile">Client:</span>
                      <span>Emon</span>
                    </li>
                    <li>
                      <span className="tile">Completed:</span>
                      <span>Ongoing</span>
                    </li>
                    <li>
                      <span className="tile">Project type:</span>
                      <span>Interior Design</span>
                    </li>
                  </ul>
                </div>
                <div className="single-img max-height400 pt-4">
                  <img
                    src="./img/news/img1.jpg"
                    className="img-fluid"
                    alt="Imageteam"
                  />
                </div>
                <div className="col-md-6 p-md-0">
                  <div className="single-img max-height300 pimg-5">
                    <img
                      src="./img/news/img1.jpg"
                      className="img-fluid"
                      alt="Imageteam"
                    />
                  </div>
                  <div className="single-img max-height300 pimg-5">
                    <img
                      src="./img/news/img4.jpg"
                      className="img-fluid"
                      alt="Imageteam"
                    />
                  </div>
                </div>
                <div className="col-md-6 p-md-0">
                  <div className="single-img pimg-5">
                    <img
                      src="./img/news/img2.jpg"
                      className="img-fluid"
                      alt="Imageteam"
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="tags">
                    <span className="heading">Tags :</span>
                    <span className="content">Inspiration</span>
                    <span className="content">Decoation</span>
                    <span className="content">Interior</span>
                    <span className="content">Minimal</span>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="share">
                    <span className="heading">Share :</span>
                    <span className="content">
                      <i className="fa fa-facebook-f"></i>
                    </span>
                    <span className="content">
                      <i className="fa fa-twitter"></i>
                    </span>
                    <span className="content">
                      <i className="fa  fa-instagram"></i>
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </CaseWrapper>
        </ScrollTop>

        <Footer />
      </Fragment>
    )
  }
}

export default withRouter(Case)
