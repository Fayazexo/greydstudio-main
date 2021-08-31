import React, { useState } from "react"
import { useForm } from "react-hook-form"
import Reveal from "react-reveal/Reveal"
import { withRouter } from "react-router-dom"
import Footer from "../components/Footer"
import { Efect, Efect1, Efect2 } from "../styles/effect.styles"

const LandOwners = ({ history }) => {
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
                Land Wanted<span className="color">?</span>
              </h1>
            </div>
          </div>
        </section>
      </Reveal>
      <Reveal effect="fadeInUp">
        <section className="container pt-0">
          <div className="row">
            <div className="col-md-12">
              <div className="form-side">
                <form className="formcontact" onSubmit={handleSubmit(onSubmit)}>
                  <section className="container p-2">
                    <div className="row">
                      <div className="col-12">
                        <h3>Land Information</h3>
                      </div>
                    </div>
                  </section>
                  <label>Locality</label>
                  <input
                    placeholder="Area/neighbourhood the land is located"
                    type="text"
                    name="locality"
                    {...register("locality", { required: true })}
                  />
                  <label>Address</label>
                  <input
                    placeholder="Full address of the land"
                    type="text"
                    name="address"
                    {...register("address", {
                      required: true,
                    })}
                  />
                  <label>Size of the Land</label>
                  <input
                    placeholder="Size of the land in kathas (rounded)"
                    type="text"
                    name="landsize"
                    {...register("landsize", {
                      required: true,
                    })}
                  />
                  <label>Width of the road in front</label>
                  <input
                    type="text"
                    placeholder="In feet"
                    name="roadwidth"
                    required
                    {...register("roadwidth", {
                      required: true,
                    })}
                  />
                  <label>Category of land</label>
                  <select {...register("landcategory", { required: true })}>
                    <option value="freehold">
                      Select Option (Default: Freehold)
                    </option>
                    <option value="freehold">Freehold</option>
                    <option value="leasehold">Leasehold</option>
                  </select>
                  <label>Facing</label>
                  <select {...register("facing", { required: true })}>
                    <option value="east">East (Default)</option>
                    <option value="west">West</option>
                    <option value="north">North</option>
                    <option value="south">South</option>
                  </select>
                  <label>Attractive features (optional)</label>
                  <select {...register("features", { required: true })}>
                    <option value="none">Select Option (Default: None)</option>
                    <option value="lakeside">Lakeside</option>
                    <option value="cornerplot">Corner Plot</option>
                    <option value="parkview">Park View</option>
                    <option value="mainroad">Main Road</option>
                    <option value="others">Others</option>
                  </select>
                  <section className="container p-2">
                    <div className="row">
                      <div className="col-12">
                        <h3>Land Owner's Profile</h3>
                      </div>
                    </div>
                  </section>
                  <label>Name of the Landowner</label>
                  <input
                    placeholder="Full name of the registered landowner"
                    type="text"
                    name="landowner"
                    required
                    {...register("landowner", { required: true })}
                  />
                  <label>Contact Person</label>
                  <input
                    placeholder="Name (If different from the landowner)"
                    type="text"
                    name="contact"
                    {...register("contact")}
                  />
                  <label>Email ID</label>
                  <input
                    placeholder="Contact person's email address"
                    type="text"
                    name="email"
                    {...register("email")}
                  />
                  <label>Contact Number</label>
                  <input
                    placeholder="Contact person's number"
                    type="text"
                    name="phone"
                    required
                    {...register("phone", { required: true })}
                  />
                  {showMessage && (
                    <div id="success">Your message has been sent.</div>
                  )}
                  <div id="failed" className="hide">
                    Message failed...
                  </div>
                  {showMessage && (
                    <div id="success">Your message has been sent.</div>
                  )}
                  <div id="failed" className="hide">
                    Message failed...
                  </div>
                  <button type="submit" id="buttonsent">
                    <span className="shine"></span>
                    <span>Receive a call</span>
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

export default withRouter(LandOwners)
