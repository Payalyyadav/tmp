import React from 'react';
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import logo from './Logo.png';
import Barista from './H1.jpg';
import Kool from './H2.jpg';
import Finance from './H3.jpg';
import Gotto from './H4.jpg';
import Moso from './H5.jpg';
import Work from './H6.jpg';
import Lite from './H7.jpg';
import Waso from './H8.jpg';
import Character from './HT1.jpg';
import Admin from './HT2.jpg';
import New from './HT3.jpg';
import Soft from './HT4.jpg';
import Central from './HT5.jpg';
import Artist from './HT6.jpg';
import Health from './HT7.jpg';
import Individual from './HT8.jpg';

import facebooke from '../MOZ/facebooke.svg'
import twitter from '../MOZ/twitter.svg'
import pinterest from '../MOZ/pinterest.svg'
import em from "../MOZ/em.svg"
import sharethis from '../MOZ/sharethis.svg'
import messanger from '../MOZ/messanger.svg'


const HTMLTemplate = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-6 mt-3'>
            <div className='logo-container'>
              <img src={logo} alt='Profile' />
              <p>free HTML templates for your websites</p>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-6 mt-5'>
            <button type="button" class="btn btn-outline-primary ms-3 h">Free HTML Templates</button>
            <button type="button" class="btn btn-outline-primary ms-3 h">580+CSS Templates</button>
            <button type="button" class="btn btn-outline-primary ms-3 h">Contact</button>

          </div>
          <hr className='mt-5' />

          <h1 className='col mt-3'>60+ Free HTML Website Templates</h1>
          <p className='fc'>Tooplate provides 60+ free <span className='co'>HTML website templates</span> HTML website templates which are mobile-friendly & responsive layouts using the<br />
            most popular Boostrap CSS and JS libraries. All of our HTML website templates are easy to edit and apply for your<br />
            website. You can use any kind of HTML code editor to modify our templates. If you have any question or<br />
            comment, please feel free to <span className='co'>contact us</span>. Thank you for visiting Tooplate.</p>
        </div>

      </div>


      <div className='container mt-5'>
        <p className='t'>Latest HTML Templates</p>
        <div className='row'>

          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='mar'>
              <img style={{ width: "88%" }} src={Barista} />
            </div>

            <div>
              <p className='Cafe mt-3 '>Barista Cafe</p>
              <p style={{ width: "88%" }} className='f text-center'>This is a Bootstrap 5 HTML layout for
                cafe businesses. There is a zoom effect
                image slider on the homepage. Cafe
                menu, customer..</p>
            </div>

          </div>



          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='mar'>
              <img style={{ width: "88%" }} src={Kool} />
            </div>

            <div>
              <p className='Cafe mt-3 '>Kool Form Pack</p>
              <p style={{ width: "88%" }} className='f text-center'>Kool Form Pack features a black theme
                video background with the use of
                Bootstrap 5 CSS. It includes 6 HTML
                pages for login,...</p>
            </div>

          </div>



          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='mar'>
              <img style={{ width: "88%" }} src={Finance} />
            </div>

            <div>
              <p className='Cafe mt-3 '>Mini Finance</p>
              <p style={{ width: "88%" }} className='f text-center'>Mini Finance is a small admin
                dashboard template for personal
                finance websites. It consists of total 6
                HTML pages with..</p>
            </div>

          </div>




          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='mar'>
              <img style={{ width: "88%" }} src={Gotto} />
            </div>

            <div>
              <p className='Cafe mt-3 '>Gotto Job</p>
              <p style={{ width: "88%" }} className='f text-center'>Gotto is free HTML template for job
                portal websites. Simple Job search form
                and Advanced Job search form are
                included. This...</p>
            </div>

          </div>

        </div>

      </div>



      <div className='container mt-5'>
        <div className='row'>

          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='mar'>
              <img style={{ width: "88%" }} src={Moso} />
            </div>

            <div>
              <p className='Cafe mt-3 '>Moso Interior</p>
              <p style={{ width: "88%" }} className='f text-center'>Moso Interior HTML CSS template can
                be used for your company website. It is
                based on Bootstrap v5.1.3 layout. Main
                menu..</p>
            </div>

          </div>



          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='mar'>
              <img style={{ width: "88%" }} src={Work} />
            </div>

            <div>
              <p className='Cafe mt-3 '>Clean Work</p>
              <p style={{ width: "88%" }} className='f text-center'>
                This is a lightblue color theme for
                cleaning service companies. Clean Work
                is a professional design website layout
                using..</p>
            </div>

          </div>



          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='mar'>
              <img style={{ width: "88%" }} src={Lite} />
            </div>

            <div>
              <p className='Cafe mt-3 '>Wedding Lite</p>
              <p style={{ width: "88%" }} className='f text-center'>
                This is a wedding HTML template for
                couples who are about to get married.
                This template is suitable for simple
                one-page..</p>
            </div>

          </div>




          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='mar'>
              <img style={{ width: "88%" }} src={Waso} />
            </div>

            <div>
              <p className='Cafe mt-3 '>Waso Strategy</p>
              <p style={{ width: "88%" }} className='f text-center'>
                Waso is free Bootstrap 5 HTML
                template for your business website.
                There are 2 pages included in this
                layout. Content tabs are..</p>
            </div>

          </div>

        </div>

      </div>





      <div className='container mt-5'>
        <p className='t'>Featured HTML Templates</p>
        <div className='row'>

          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='mar'>
              <img style={{ width: "88%" }} src={Character} />
            </div>

            <div>
              <p className='Cafe mt-3 '>Character</p>
              <p style={{ width: "88%" }} className='f text-center'>
                Character is a modern one-page design
                HTML5 template. You can easily alter
                text and images. Alternating images
                made this layout..
              </p>
            </div>

          </div>



          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='mar'>
              <img style={{ width: "88%" }} src={Admin} />
            </div>

            <div>
              <p className='Cafe mt-3 '>Admin Dashboard</p>
              <p style={{ width: "88%" }} className='f text-center'>
                This is an admin HTML template.
                Dashboard shows bar chart, pie chart,
                graphs, calendar, to-do list, etc. Product
                List includes..</p>
            </div>

          </div>



          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='mar'>
              <img style={{ width: "88%" }} src={New} />
            </div>

            <div>
              <p className='Cafe mt-3 '>New Spot One-page</p>
              <p style={{ width: "88%" }} className='f text-center'>
                New Spot HTML5 Theme is using simple
                circular spots. Different content
                sections are separated by sloping
                backgrounds. Just put..</p>
            </div>

          </div>




          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='mar'>
              <img style={{ width: "88%" }} src={Soft} />
            </div>

            <div>
              <p className='Cafe mt-3 '>Soft Landing Page</p>
              <p style={{ width: "88%" }} className='f text-center'>
                This soft landing HTML page is clean
                and minimal design. It has simple
                content tabs, carousel, pricing tables,
                and contact form.</p>
            </div>

          </div>

        </div>

      </div>



      <div className='container mt-5'>
        <div className='row'>

          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='mar'>
              <img style={{ width: "88%" }} src={Central} />
            </div>

            <div>
              <p className='Cafe mt-3 '>Central Bootstrap 4</p>
              <p style={{ width: "88%" }} className='f text-center'>
                Central is one-page Bootstrap 4 layout.
                It is simple HTML template that can be
                used for any kind of website. It has a
                dropdown..</p>
            </div>

          </div>



          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='mar'>
              <img style={{ width: "88%" }} src={Artist} />
            </div>

            <div>
              <p className='Cafe mt-3 '>Artist Minimal Page</p>
              <p style={{ width: "88%" }} className='f text-center'>
                Artist is a minimal Bootstrap theme
                with a subtle parallax effect. It has
                animated contents with a slide up
                effect. This is a..</p>
            </div>

          </div>



          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='mar'>
              <img style={{ width: "88%" }} src={Health} />
            </div>

            <div>
              <p className='Cafe mt-3 '>Health Center</p>
              <p style={{ width: "88%" }} className='f text-center'>
                Health HTML Template includes 2
                pages. Main page features different
                sections and news page is a 2-column
                content page.</p>
            </div>

          </div>




          <div className='col-sm-12 col-md-6 col-lg-3'>
            <div className='mar'>
              <img style={{ width: "88%" }} src={Individual} />
            </div>

            <div>
              <p className='Cafe mt-3'>Individual</p>
              <p style={{ width: "88%" }} className='f text-center'>
                Individual is a parallax HTML template
                with different background images for
                different sections. Gallery is included.</p>
            </div>

          </div>

        </div>

      </div>
      <Container className='  mt-5 mb-3'>
        <Row>
          <Col sm={1} md={1} lg={1}></Col>
          <Col sm={10} md={10} lg={10} className='d-flex align-items-center justify-content-center'> <div className='d-flex flex-column justify-content-center align-items-center me-2'><strong > 24k</strong>
            <span className='fss '>Shares</span></div><Button variant="primary" className=' d-flex rounded-pill me-2 pds align-items-center justify-content-center'><img alt='facebook' className='mi' src={facebooke} /><span className='dn'>7.4k</span></Button>
            <Button variant="dark" className=' d-flex rounded-pill me-2 align-items-center pds justify-content-center'><img alt='facebook' className='mi' src={twitter} /><span className='dn'>3.8k</span></Button>
            <Button variant="danger" className=' d-flex rounded-pill me-2 align-items-center pds justify-content-center'><img alt='facebook' className='mi' src={pinterest} /><span className='dn'>184</span></Button>           
            <Button variant="secondary" className=' d-flex rounded-pill align-items-center justify-content-center pds'><img alt='facebook' className='mi ' src={em} /><span className='dn'>474</span></Button>
            <Button variant="success" className='pdss me-2 ms-2 rounded-pill'><img alt='facebook' src={sharethis} /></Button>
            <Button variant="primary" className=' d-flex rounded-pill me-2 align-items-center pds justify-content-center'><img alt='facebook' className='mi' src={messanger} /><span className='dn'>208</span></Button></Col>
          <Col sm={1} md={1} lg={1}></Col>
        </Row>
      </Container>
      <div className='container mt-5 pt-5'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-8'>
            <h2 className='cl'>About Tooplate Website</h2>
            <p className='f'>Tooplate brings you a variety of <span className='colo '>free HTML templates</span> for your business or corporate websites, digital marketing<br />
              pages, image galleries and personal portfolios. Tooplate used open-source Bootstrap UI kit for latest HTML CSS <br />
              layouts. You can download any template instantly for free. No need to login or register to use our templates.</p>
          </div>
          <div className='col-sm-12 col-md-6 col-lg-4 text-end'>
         <button  type="button" class="btn btn-primary ms-5  ">Free HTML Templates</button>
          </div>
        </div>
        </div>
       <div className='container mt-5'>
        <hr/>
        <div className='container d-flex pt-3 ce '>          
        <p className='me-1'>Copyright © 2024</p>
            <p className='menu me-1'> Free HTML Templates</p> 
            <p className='me-1'>by Tooplate -</p> 
            <p className='menu me-1'> About- </p> 
            <p className='menu me-1'>Privacy Policy-</p>
            <p className='menu me-1'>Sitemap</p>
          </div>
      </div>
    </div>
  );
}

export default HTMLTemplate;

