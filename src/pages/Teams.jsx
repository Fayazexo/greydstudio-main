import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Reveal from "react-reveal/Reveal"
import { withRouter } from "react-router-dom"
import Footer from "../components/Footer"
import { Efect, Efect1, Efect2 } from "../styles/effect.styles"

const Teams = ({ history }) => {
  const [showMessage, setShowMessage] = useState(false)

  const { register, handleSubmit } = useForm()

  const onSubmit = (data) => {
    setTimeout(() => {
      setShowMessage(true)
    }, 1000)
    setTimeout(() => {
      setShowMessage(false)
    }, 5000)
    console.log(data)
  }
  return (
    <div>
      <Efect />
      <Efect1 />
      <Efect2 />

      <div className="jumbotron head" />

      <Reveal effect="fadeInUp">
        <section className="container">
          <div className="row">
            <div className="col-12">
              <h1>
                Get in touch with us to design <br />
                your <span className="color">dream</span> home
              </h1>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className="container pt-0">
          <div className="row">
            <div className="col-md-6">
              <div className="text-side">
                <h3 className="heading">Talk with our expert designers </h3>
                <p>
                  Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                  euismod dui, eu pulvinar nunc sapien ornare nisl. <br />
                  Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed,
                  urna.
                </p>
                <div className="address">
                  <div className="heading">Our Office</div>
                  <div className="list">
                    <i className="fa fa-map-marker"></i>
                    House 44/i, Flat A1, Road 4, Block D Bashundhara R/A, Dhaka
                    1229.
                  </div>
                  <div className="list">
                    <i className="fa fa-envelope-o"></i>
                    <a
                      href="mailto:contact_info@homekins.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      info@greydstudio.net
                    </a>
                  </div>
                  <div className="list">
                    <i className="fa fa-phone"></i>
                    +880 19 8935 9890
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-side">
                <form className="formcontact" onSubmit={handleSubmit(onSubmit)}>
                  <label>Name</label>
                  <input
                    placeholder="Enter your name"
                    type="text"
                    name="name"
                    {...register("Name", { required: true })}
                  />
                  <label>Email</label>
                  <input
                    placeholder="Enter your email address"
                    type="email"
                    name="email"
                    {...register("Email", {
                      required: true,
                    })}
                  />
                  <label>Phone</label>
                  <input
                    placeholder="Enter your phone number"
                    type="phone"
                    name="phone"
                    {...register("Mobile Number", {
                      required: true,
                    })}
                  />
                  <label>Message</label>
                  <textarea
                    placeholder="Enter your message"
                    name="message"
                    required
                    {...register("Message")}
                  />
                  {showMessage && (
                    <div id="success">Your message has been sent.</div>
                  )}
                  <div id="failed" className="hide">
                    Message failed...
                  </div>
                  <button type="submit" id="buttonsent">
                    <span className="shine"></span>
                    <span>Send</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </div>
  )
}

export default withRouter(Teams)
