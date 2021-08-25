import React from "react";
import Reveal from 'react-reveal/Reveal';
import { withRouter } from "react-router-dom";
import Abouthome from '../components/Abouthome';
import Accomplish from '../components/Accomplish';
import Carouselclient from '../components/Carouselclient';
import Carouselclientb from '../components/Carouselclientb';
import Carouselfeature from '../components/Carouselfeature';
import Carouselnews from '../components/Carouselnews';
import Carouselprojects from '../components/Carouselprojects';
import Carouselteam from '../components/Carouselteam';
import Featurehome from '../components/Featurehome';
import Footer from '../components/Footer';
import Slider from '../components/Sliderhome';
import { Efect } from "../styles/effect.styles";

const Home = ({ history }) => {


  return (
    <div>

      <Efect/>

      <Reveal effect="fadeIn">
        <section className="jumbotron jumbomain">
            <Slider />
        </section>
      </Reveal>
      
      <Featurehome/>
      
      <Reveal effect="fadeInUp">
        <Abouthome/>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className='container-fluid'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Expertnesses</div>
            </div>
            <div className='col-12'>
              <Carouselfeature/>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className='container-fluid py-0'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <Carouselclient/>
            </div>
          </div>
        </section>
      </Reveal>
      
      <Reveal effect="fadeInUp">
        <section className='container-fluid'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <Carouselclientb/>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className='container-fluid py-0'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Projects</div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 p-0'>
              <Carouselprojects/>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className='container-fluid'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Our Team</div>
            </div>
            <div className='col-12'>
              <Carouselteam/>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal effect="fadeInUp">
        <Accomplish/>
      </Reveal>

      <Reveal effect="fadeInUp">
        <section className='container-fluid pt-0'>
          <div className='row m-2-hor'>
            <div className='col-12'>
              <div className='heading'>Latest News</div>
            </div>
            <div className='col-12'>
              <Carouselnews/>
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />

    </div>
  );
};

export default withRouter(Home);
