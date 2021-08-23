import React from 'react';

export default () => (
  <footer className='container-fluid black_more'>
  <div className='bg-footer'>
    <img src='./img/footer-img.png' alt='bg-footer'/>
  </div>
    <div className='row m-2-hor'>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            <h2>About Us</h2>
          </div>
          <div className='content'>
             <p>GREY.D’STUDIO is one of the fastest growing business entity in Bangladesh. The group invested in potential business sectors and shows incremental growth in a competitive market dynamic.</p>
          </div>
          <div className='content'>
             <p>GREY.D’STUDIO was born with a thirst to construct high quality building.</p>
          </div>
          <div className='link-call' onClick={()=> window.open("mailto:info@greydstudio.net", "_self")}>info@greydstudio.net</div>
        </div>
      </div>
      <div className='col-md-2'>
        <div className='footer-col'>
        </div>
      </div>
      <div className='col-md-2'>
        <div className='footer-col'>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading right'>
            Call Us
          </div>
          <div className='content right flexo'>
            <a className='link right'>+88 01712053835</a>
            <a className='link right'>+88 01735822598</a>
          </div>
          <div className='heading right'>
            Office Address
          </div>
          <div className='content right'>
            <p>House 44/i, Flat A1, Road 4, Block D <br />
            Bashundhara R/A, Dhaka 1229.</p>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-facebook-f"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-linkedin"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-twitter"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='subfooter'>
      <div className='row m-2-hor'>
        <div className='col-md-6'>
          <div className='content'>© 14-2021 by GREY.D’STUDIO LTD.</div>
        </div>
      </div>
    </div>
  </footer>
);
