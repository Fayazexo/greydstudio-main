import React, { useEffect, useState } from "react"
import Reveal from "react-reveal/Reveal"
import { withRouter } from "react-router-dom"
import Footer from "../components/Footer"
import { Efect, Efect1, Efect2 } from "../styles/effect.styles"
import { LinkWrap, Overlay } from "../styles/Work.styles"

const Events = ({ history }) => {
  const [toCase, setCase] = useState("")
  const [coord, setCoords] = useState()

  useEffect(() => {
    toCase &&
      setTimeout(() => {
        history.push(toCase)
      }, 600)
  }, [toCase, history])

  const handleCaseSwap = (e, uri) =>
    e.x < coord + 15 && e.x > coord - 15 && setCase(uri)

  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />
      <div className="jumbotron head" />
      <Reveal effect="fadeInUp">
        <section className="container-fluid pb-0">
          <div className="row m-2-hor">
            <div className="col-md-12">
              <h1 className="heading mt-5">Latest News About Our Works</h1>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container-fluid">
          <div className="row m-2-hor">
            <div className="col-md-4 slick slicknews p-3 mb-0">
              <div className="slick-slide d-block">
                <div className="mr-0">
                  <div className="itm mr-0">
                    <LinkWrap active={toCase === "/detailnews"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailnews")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/news/img1.jpg"
                            className="img-fluid"
                            alt="Imageteam"
                          />
                        </div>
                        <div className="desc">
                          <div className="date"> Sept 08, 2020</div>
                          <div className="name">Pacific Region Awards</div>
                          <div className="content">
                            Make the most of compact spaces with space saving
                            furniture that are ingenuous and innovative.
                          </div>
                        </div>
                        <div className="icon">
                          <span>Read More</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slicknews p-3 mb-0">
              <div className="slick-slide d-block">
                <div className="mr-0">
                  <div className="itm mr-0">
                    <LinkWrap active={toCase === "/detailnews"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailnews")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/news/img2.jpg"
                            className="img-fluid"
                            alt="Imageteam"
                          />
                        </div>
                        <div className="desc">
                          <div className="date"> Sept 08, 2020</div>
                          <div className="name">Pacific Region Awards</div>
                          <div className="content">
                            Make the most of compact spaces with space saving
                            furniture that are ingenuous and innovative.
                          </div>
                        </div>
                        <div className="icon">
                          <span>Read More</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slicknews p-3 mb-0">
              <div className="slick-slide d-block">
                <div className="mr-0">
                  <div className="itm mr-0">
                    <LinkWrap active={toCase === "/detailnews"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailnews")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/news/img3.jpg"
                            className="img-fluid"
                            alt="Imageteam"
                          />
                        </div>
                        <div className="desc">
                          <div className="date"> Sept 08, 2020</div>
                          <div className="name">Pacific Region Awards</div>
                          <div className="content">
                            Make the most of compact spaces with space saving
                            furniture that are ingenuous and innovative.
                          </div>
                        </div>
                        <div className="icon">
                          <span>Read More</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slicknews p-3 mb-0">
              <div className="slick-slide d-block">
                <div className="mr-0">
                  <div className="itm mr-0">
                    <LinkWrap active={toCase === "/detailnews"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailnews")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/news/img4.jpg"
                            className="img-fluid"
                            alt="Imageteam"
                          />
                        </div>
                        <div className="desc">
                          <div className="date"> Sept 08, 2020</div>
                          <div className="name">Pacific Region Awards</div>
                          <div className="content">
                            Make the most of compact spaces with space saving
                            furniture that are ingenuous and innovative.
                          </div>
                        </div>
                        <div className="icon">
                          <span>Read More</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slicknews p-3 mb-0">
              <div className="slick-slide d-block">
                <div className="mr-0">
                  <div className="itm mr-0">
                    <LinkWrap active={toCase === "/detailnews"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailnews")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/news/img1.jpg"
                            className="img-fluid"
                            alt="Imageteam"
                          />
                        </div>
                        <div className="desc">
                          <div className="date"> Sept 08, 2020</div>
                          <div className="name">Pacific Region Awards</div>
                          <div className="content">
                            Make the most of compact spaces with space saving
                            furniture that are ingenuous and innovative.
                          </div>
                        </div>
                        <div className="icon">
                          <span>Read More</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 slick slicknews p-3 mb-0">
              <div className="slick-slide d-block">
                <div className="mr-0">
                  <div className="itm mr-0">
                    <LinkWrap active={toCase === "/detailnews"}>
                      <Overlay
                        active={!!toCase}
                        onMouseDown={(e) => setCoords(e.nativeEvent.x)}
                        onMouseUp={(e) =>
                          handleCaseSwap(e.nativeEvent, "/detailnews")
                        }
                      >
                        <div className="bg">
                          <img
                            src="./img/news/img2.jpg"
                            className="img-fluid"
                            alt="Imageteam"
                          />
                        </div>
                        <div className="desc">
                          <div className="date"> Sept 08, 2020</div>
                          <div className="name">Pacific Region Awards</div>
                          <div className="content">
                            Make the most of compact spaces with space saving
                            furniture that are ingenuous and innovative.
                          </div>
                        </div>
                        <div className="icon">
                          <span>Read More</span>
                        </div>
                      </Overlay>
                    </LinkWrap>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  )
}

export default withRouter(Events)