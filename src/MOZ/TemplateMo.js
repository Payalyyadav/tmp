import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css'

import facebooke from '../MOZ/facebooke.svg'
import twitter from '../MOZ/twitter.svg'
import pinterest from '../MOZ/pinterest.svg'
import em from "../MOZ/em.svg"
import sharethis from '../MOZ/sharethis.svg'
import messanger from '../MOZ/messanger.svg'
import { NavLink } from 'react-router-dom';

const TemplateMo = () => {
  return (
    <div>
      <div className='container-fluid im pb-5'>
        <div className=''>
          <div className='row'>

            <div className='col-sm-12 col-md-6 col-lg-6'>
              <img className='mt-3 i' src='https://templatemo.com/images/templatemo-logo-new.png' />
              <div className='t'>
                <p className='text-white mt-3 '>Free HTML CSS Website Templates </p>
              </div>
            </div>


            <div className='col-sm-12 col-sm-6 col-lg-6'>
              <div className='button-container mt-5 pt-5 '>
                <NavLink to="/FreeTemplate" className="text-decoration-none">
                  <button type="button" className='btnbg me-3'>Free Templates</button>
                </NavLink>
                <NavLink to="/HTMLTemplate" className="text-decoration-none">
                  <button type="button" className='btnbg me-3' >HTML Templates</button></NavLink>
                <NavLink to="/Links" className="text-decoration-none">
                  <button type="button" className='btnbg me-3'>Links</button>
                </NavLink>
                <NavLink to="/Contact" className="text-decoration-none">
                  <button type="button" className='btnbg' >Contact</button>
                </NavLink>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* <div className='im'>
        <div className='container-fluid p-5'>
          <div className='row'>
            <div className='col'>
              <div style={{ color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div >
                  <h1 >template <span style={{ color: "#009900"}}>mo</span></h1>
                  <p className='fs-3'>Free HTML CSS Website Templates</p>
                </div>
                <div className='mx-auto '> 
                  <div className='ms-5 ps-5'>
                  <button className='btn btn-success ms-3 btnbg' >Free Template</button>
                  <button className='btn btn-success ms-3 btnbg' >HTML Template</button>
                  <button className='btn btn-success ms-3 btnbg' >Link</button>
                  <button className='btn btn-success ms-3 btnbg' >Contact</button>
           
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* 
      <div className='container bgb mt-5 text-white'>
        <div className='  mt-3'>
          <h1>Free HTML CSS Templates</h1>

          <p className='f mt-3'>Latest 200+ Templates are responsive HTML5 mobile-ready CSS layouts with Bootstrap framework. All 588+ CSS</p>
          <p> templates are absolutely 100% free download for your web design. You can use free templates for your commercial or</p>
          <p>  personal or learning purposes. Please <span className='bly'>contact</span> us if you have any question.</p>
          <br />
          <p>We have a variety of CSS templates in different categories. You may start from ...</p>

          <div className='f d-flex'>

            <p className='me-3 bly'>50+ Portfolio Templates </p>
            <p className='me-3 bly'> 40+ Multi-page  </p>
            <p className='me-3 bly'>  36+ Business </p>
            <p className='me-3 bly'> 31+ Bootstrap 5 </p>
          </div>

          <div>
            <Button className='me-3 hw' variant="dark">60+One-Page</Button>
            <Button className='me-3 hw' variant="dark">26+Digital Marketing</Button>
            <Button className='me-3 hw' variant="dark">590+All Templates</Button>
          </div>
        </div>
      </div> */}

      <div className='container bg-dark text-white mt-5 pt-5 containerborder'>
        <div className='row'>
          <div className='col text-white'>
            <h1 className='ms-4'>Free HTML CSS Templates</h1>
            <p className='ms-4'>Latest 200+ Templates are responsive HTML5 mobile-ready CSS layouts with Bootstrap framework. All 588+ CSS</p>
            <p className='ms-4'>templates are absolutely 100% free download for your web design. You can use free templates for your commercial or</p>
            <p className='ms-4'>personal or learning purposes. Please <span className='bly'>contact</span> us if you have any question.</p>
            <p className='ms-4'>We have a variety of CSS templates in different categories. You may start from ...</p>

            <div className='d-flex'>

              <p className='ms-3  bly'> 50+ Portfolio Templates</p>
              <p className='ms-3 bly '>40+ Multi-page</p>
              <p className='ms-3 bly '>  36+ Business</p>
              <p className='ms-3 bly '>31+ Bootstrap 5</p>
              <p className='ms-3 bly'> 14+ Landing Pages</p>
            </div>
            <button className='btn btn-dark border p-3 ms-3 mb-5 bly'>60+ One-Page</button>
            <button className='btn btn-dark border p-3 ms-3 mb-5 bly'>26+Digital Marketing</button>
            <button className='btn btn-dark border p-3 ms-3 mb-5 bly'>59+All Template</button>
          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-12 '>
            <div>
              <div class="card" style={{ width: "18rem", border: 'none' }}>
                <img src="https://templatemo.com/thumbnails-360/tm-591-villa-agency.jpg" class="card-img-top" alt="..." />
                <div class="card-body border bn">
                  <div className=''>
                    <h5 className='text-center colo '>Villa Agency</h5>
                    <p style={{ fontSize: '15px' }}>Villa Agency is a professional HTML CSS template with Bootstrap v5.3.0 responsive framework. There are Property Listing page and...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div>
              <div class="card" style={{ width: "18rem", border: 'none' }}>
                <img src="https://templatemo.com/thumbnails-360/tm-590-topic-listing.jpg" class="card-img-top" alt="..." />
                <div class="card-body border bn">
                  <div className=''>
                    <h5 className='text-center colo'>Topic Listing</h5>
                    <p style={{ fontSize: '15px' }}>
                      Topic Listing includes 4 HTML pages <br />
                      for home, listing, detail and contact.<br />
                      Homepage features many sections<br />
                      such as search bar,...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div>
              <div class="card" style={{ width: "18rem", border: 'none' }}>
                <img src="https://templatemo.com/thumbnails-360/tm-589-lugx-gaming.jpg" class="card-img-top" alt="..." />
                <div class="card-body border bn">
                  <div className=''>
                    <h5 className='text-center colo'>Lugx Gaming</h5>
                    <p style={{ fontSize: '15px' }}>
                      Lugx Gaming Shop Template is based<br />
                      on Bootstrap 5 CSS library. This blue <br />
                      color layout used Bootstrap v5.3.0<br />
                      alpha 1 specifically...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div>
              <div class="card" style={{ width: "18rem", border: 'none' }}>
                <img src="https://templatemo.com/thumbnails-360/tm-588-ebook-landing.jpg" class="card-img-top" alt="..." />
                <div class="card-body border bn">
                  <div className=''>
                    <h5 className='text-center colo'>Ebook Landing</h5>
                    <p style={{ fontSize: '15px' }}> This template is an ebook landing<br />
                      page or one-page layout for digital<br />
                      books. There are 6 different sections<br />
                      including content...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div>
              <div class="card" style={{ width: "18rem", border: 'none' }}>
                <img src="https://templatemo.com/thumbnails-360/tm-556-catalog-z.jpg" class="card-img-top" alt="..." />
                <div class="card-body border bn">
                  <div className=''>
                    <h5 className='text-center colo'>Catalog Z</h5>
                    <p style={{ fontSize: '15px' }}>
                      Catalog-Z is free photo video HTML <br />
                      template based on Bootstrap 5 Alpha <br />
                      2. There are 6 HTML pages including <br />
                      photo detail, video...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div>
              <div class="card" style={{ width: "18rem", border: 'none' }}>
                <img src="https://templatemo.com/thumbnails-360/tm-559-zay-shop.jpg" class="card-img-top" alt="..." />
                <div class="card-body border bn">
                  <div className=''>
                    <h5 className='text-center colo'>Zay Shop</h5>
                    <p style={{ fontSize: '15px' }}>
                      Zay Shop is a Bootstrap 5 beta 1 <br />
                      HTML CSS eCommerce Template for<br />
                      your online stores. This green color<br />
                      template included listing...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div>
              <div class="card" style={{ width: "18rem", border: 'none' }}>
                <img src="https://templatemo.com/thumbnails-360/tm-562-space-dynamic.jpg" class="card-img-top" alt="..." />
                <div class="card-body border bn">
                  <div className=''>
                    <h5 className='text-center colo'>Space Dynamic</h5>
                    <p style={{ fontSize: '15px' }}>
                      Space Dynamic is a digital marketing<br />
                      HTML5 template based on Bootstrap <br />
                      5 beta 2. This layout used animated <br />
                      CSS for page element...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div>
              <div class="card" style={{ width: "18rem", border: 'none' }}>
                <img src="https://templatemo.com/thumbnails-360/tm-564-plot-listing.jpg" class="card-img-top" alt="..." />
                <div class="card-body border bn">
                  <div className=''>
                    <h5 className='text-center colo'>Plot Listing</h5>
                    <p style={{ fontSize: '15px' }}>
                      Plot List Bootstrap 5 template<br />
                      includes content tabs and carousel <br />
                      item lists. This template has 4 different
                      HTML pages which can...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div>
              <div class="card" style={{ width: "18rem", border: 'none' }}>
                <img src="https://templatemo.com/thumbnails-360/tm-570-chain-app-dev.jpg" class="card-img-top" alt="..." />
                <div class="card-body border bn">
                  <div className=''>
                    <h5 className='text-center colo'>Chain App Dev</h5>
                    <p style={{ fontSize: '15px' }}>
                      Chain App Dev is an app landing page<br />
                      HTML5 template based on Bootstrap<br />
                      v5.1.3 CSS layout. You can use this for<br />
                      your digital...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div>
              <div class="card" style={{ width: "18rem", border: 'none' }}>
                <img src="https://templatemo.com/thumbnails-360/tm-574-mexant.jpg" class="card-img-top" alt="..." />
                <div class="card-body border bn">
                  <div className=''>
                    <h5 className='text-center colo'>Mexant</h5>
                    <p style={{ fontSize: '15px' }}>
                      Mexant is a financial HTML CSS<br />
                      template suitable to apply for digital<br />
                      currency or crypto related websites.<br />
                      However, this can also...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div>
              <div class="card" style={{ width: "18rem", border: 'none' }}>
                <img src="https://templatemo.com/thumbnails-360/tm-578-first-portfolio.jpg" class="card-img-top" alt="..." />
                <div class="card-body border bn">
                  <div className=''>
                    <h5 className='text-center colo'>First Portfolio</h5>
                    <p style={{ fontSize: '15px' }}>
                      First Portfolio is one-page layout CSS<br />
                      template for your personal portfolio<br />
                      page. This template uses green,<br />
                      purple, white, and...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div>
              <div class="card" style={{ width: "18rem", border: 'none' }}>
                <img src="https://templatemo.com/thumbnails-360/tm-580-woox-travel.jpg" class="card-img-top" alt="..." />
                <div class="card-body border bn">
                  <div className=''>
                    <h5 className='text-center colo'>Woox Travel</h5>
                    <p style={{ fontSize: '15px' }}>
                      Woox Travel is a professional HTML <br />
                      CSS layout for your website. Bootstrap<br />
                      5.2.0 is used for this template. There <br />
                      are 4 different...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className='container-fluid mk mt-5'>
        <div className='row'>

          <div className='col-sm-12 col-md-3 col-lg-3'>
            <div>
              <img className='' style={{ width: "90%" }} src='https://templatemo.com/thumbnails-360/tm-591-villa-agency.jpg' />
            </div>

            <div className="card " style={{ width: "80%" }}>
              <div className="card-body text-center">
                <h5 style={{ color: "#0066AA" }}>Villa Agency</h5>

                <p className='mt-3'>
                  Villa Agency is a professional HTML <br />
                  CSS template with Bootstrap v5.3.0<br />
                  responsive framework. There are<br />
                  Property Listing page and...</p>
              </div>
            </div>

          </div>


          <div className='col-sm-12 col-md-3 col-lg-3'>
            <div>
              <img className='' style={{ width: "100%" }} src='https://templatemo.com/thumbnails-360/tm-590-topic-listing.jpg' />

            </div>

            <div className="card pic" style={{ width: "100%" }}>
              <div className="card-body text-center">
                <h5 style={{ color: "#0066AA" }}>Topic Listing</h5>

                <p className='mt-3'>
                  Topic Listing includes 4 HTML pages <br />
                  for home, listing, detail and contact.<br />
                  Homepage features many sections<br />
                  such as search bar,...</p>
              </div>
            </div>
          </div>

          <div className='col-sm-12 col-md-3 col-lg-3'>
            <div>
              <img className='picr' style={{ width: "100%" }} src='https://templatemo.com/thumbnails-360/tm-589-lugx-gaming.jpg' />
            </div>

            <div className="card pic" style={{ width: "100%" }}>
              <div className="card-body text-center">
                <h5 style={{ color: "#0066AA" }}>Lugx Gaming</h5>

                <p className='mt-3'>
                  Lugx Gaming Shop Template is based<br />
                  on Bootstrap 5 CSS library. This blue <br />
                  color layout used Bootstrap v5.3.0<br />
                  alpha 1 specifically....</p>
              </div>
            </div>

          </div>

          <div className='col-sm-12 col-md-3 col-lg-3'>
            <div>
              <img className='picr' style={{ width: "100%" }} src='https://templatemo.com/thumbnails-360/tm-588-ebook-landing.jpg' />
            </div>

            <div className="card pic" style={{ width: "100%" }}>
              <div className="card-body text-center">
                <h5 style={{ color: "#0066AA" }}>Ebook Landing</h5>

                <p className='mt-3'>
                  This template is an ebook landing<br />
                  page or one-page layout for digital<br />
                  books. There are 6 different sections<br />
                  including content...</p>
              </div>
            </div>

          </div>

        </div>

      </div> */}

      {/* <div className='container-fluid mk mt-5'>
        <div className='row'>

          <div className='col-sm-12 col-md-3 col-lg-3'>
            <div>
              <img className='picr' style={{ width: "100%" }} src='https://templatemo.com/thumbnails-360/tm-556-catalog-z.jpg' />
            </div>

            <div className="card pic" style={{ width: "100%" }}>
              <div className="card-body text-center">
                <h5 style={{ color: "#0066AA" }}>Catalog Z</h5>

                <p className='mt-3'>
                  Catalog-Z is free photo video HTML <br />
                  template based on Bootstrap 5 Alpha <br />
                  2. There are 6 HTML pages including <br />
                  photo detail, video...</p>
              </div>
            </div>

          </div>

          <div className='col-sm-12 col-md-3 col-lg-3'>
            <div>
              <img className='picr' style={{ width: "100%" }} src='https://templatemo.com/thumbnails-360/tm-559-zay-shop.jpg' />

            </div>

            <div className="card pic" style={{ width: "100%" }}>
              <div className="card-body text-center">
                <h5 style={{ color: "#0066AA" }}>Zay Shop</h5>

                <p className='mt-3'>
                  Zay Shop is a Bootstrap 5 beta 1 <br />
                  HTML CSS eCommerce Template for<br />
                  your online stores. This green color<br />
                  template included listing...</p>
              </div>
            </div>
          </div>

          <div className='col-sm-12 col-md-3 col-lg-3'>
            <div>
              <img className='picr' style={{ width: "100%" }} src='https://templatemo.com/thumbnails-360/tm-562-space-dynamic.jpg' />
            </div>
            <div className="card pic" style={{ width: "100%" }}>
              <div className="card-body text-center">
                <h5 style={{ color: "#0066AA" }}>Space Dynamic</h5>

                <p className='mt-3'>
                  Space Dynamic is a digital marketing<br />
                  HTML5 template based on Bootstrap <br />
                  5 beta 2. This layout used animated <br />
                  CSS for page element...</p>
              </div>
            </div>

          </div>

          <div className='col-sm-12 col-md-3 col-lg-3'>
            <div>
              <img className='picr' style={{ width: "100%" }} src='https://templatemo.com/thumbnails-360/tm-564-plot-listing.jpg' />

            </div>


            <div className="card pic" style={{ width: "100%" }}>
              <div className="card-body text-center">
                <h5 style={{ color: "#0066AA" }}>Plot Listing</h5>

                <p className='mt-3'>
                  Plot List Bootstrap 5 template<br />
                  includes content tabs and carousel <br />
                  item lists. This template has 4 different<br />
                  HTML pages which can...</p>
              </div>
            </div>
          </div>

        </div>

      </div> */}


      {/* <div className='container-fluid mk mt-5'>
        <div className='row'>

          <div className='col-sm-12 col-md-3 col-lg-3'>
            <div>
              <img className='picr' style={{ width: "100%" }} src='https://templatemo.com/thumbnails-360/tm-570-chain-app-dev.jpg' />

            </div>

            <div className="card pic" style={{ width: "100%" }}>
              <div className="card-body text-center">
                <h5 style={{ color: "#0066AA" }}>Chain App Dev</h5>

                <p className='mt-3'>
                  Chain App Dev is an app landing page<br />
                  HTML5 template based on Bootstrap<br />
                  v5.1.3 CSS layout. You can use this for<br />
                  your digital...</p>
              </div>
            </div>
          </div>

          <div className='col-sm-12 col-md-3 col-lg-3'>
            <div>
              <img className='picr' style={{ width: "100%" }} src='https://templatemo.com/thumbnails-360/tm-574-mexant.jpg' />

            </div>

            <div className="card pic" style={{ width: "100%" }}>
              <div className="card-body text-center">
                <h5 style={{ color: "#0066AA" }}>Mexant</h5>

                <p className='mt-3'>
                  Mexant is a financial HTML CSS<br />
                  template suitable to apply for digital<br />
                  currency or crypto related websites.<br />
                  However, this can also...</p>
              </div>
            </div>

          </div>

          <div className='col-sm-12 col-md-3 col-lg-3'>
            <div>
              <img className='picr' style={{ width: "100%" }} src='https://templatemo.com/thumbnails-360/tm-578-first-portfolio.jpg' />

            </div>

            <div className="card pic" style={{ width: "100%" }}>
              <div className="card-body text-center">
                <h5 style={{ color: "#0066AA" }}>First Portfolio</h5>

                <p className='mt-3'>
                  First Portfolio is one-page layout CSS<br />
                  template for your personal portfolio<br />
                  page. This template uses green,<br />
                  purple, white, and...</p>
              </div>
            </div>
          </div>

          <div className='col-sm-12 col-md-3 col-lg-3'>
            <div>
              <img className='picr' style={{ width: "100%" }} src='https://templatemo.com/thumbnails-360/tm-580-woox-travel.jpg' />
            </div>


            <div className="card pic" style={{ width: "100%" }}>
              <div className="card-body text-center">
                <h5 style={{ color: "#0066AA" }}>Woox Travel</h5>

                <p className='mt-3'>
                  Woox Travel is a professional HTML <br />
                  CSS layout for your website. Bootstrap<br />
                  5.2.0 is used for this template. There <br />
                  are 4 different...</p>
              </div>
            </div>

          </div>

        </div>

      </div> */}

      <div className='container mt-3' style={{ display: 'flex', justifyContent: 'end' }}>
        <button type="button" className='btn btn-light bn '>View All Templates</button>
      </div>


      <div className='container-fluid mt-5'>
        <div className='row'>
          <div className='col-sm-12 col-md-6 col-lg-8 fr'>
            <div>
              <h3 className='gr '>What is Free CSS Template?</h3>
              <p className='of mt-3'>Free CSS Template is a ready-made web page layout design based on CSS (Cascading Style Sheet) that<br />
                formats HTML web pages.</p>
            </div>

            <div>
              <h3 className='gr '>What are the best HTML & CSS code editors?</h3>
              <p className='of mt-3'>Most popular code editors are Visual Studio Code, Dreamweaver, Notepad++, Rapid CSS, Komodo Edit,<br />
                Brackets, Sublime Text, Bluefish and Atom to edit the codes and put in your own contents. After that, you can<br />
                publish your own website on any web hosting platform.</p>
            </div>

            <div>
              <h3 className='gr '>Are all CSS templates free to download?</h3>
              <p className='of mt-3'>Yes, all templates are 100% free to download instantly without asking your email or login account. You can<br />
                browse and download <span className='bl'>588+ free CSS templates</span> from TemplateMo website. You can also use them to learn <br />
                coding HTML, CSS, and JavaScripts.</p>
            </div>


          </div>

        </div>

      </div>

      <Container className='  mt-5 mb-3'>
        <Row>
          <Col sm={1} md={1} lg={1}></Col>
          <Col sm={10} md={10} lg={10} className='d-flex align-items-center justify-content-center'> <div className='d-flex flex-column justify-content-center align-items-center me-2'><strong > 71.6k</strong>
            <span className='fss '>Shares</span></div><Button variant="primary" className=' d-flex rounded-pill me-2 pds align-items-center justify-content-center'><img alt='facebook' className='mi' src={facebooke} /><span className='dn'>9.9k</span></Button>
            <Button variant="dark" className=' d-flex rounded-pill me-2 align-items-center pds justify-content-center'><img alt='facebook' className='mi' src={twitter} /><span className='dn'>5.8k</span></Button>
            <Button variant="primary" className=' d-flex rounded-pill me-2 align-items-center pds justify-content-center'><img alt='facebook' className='mi' src={messanger} /><span className='dn'>478</span></Button>
            <Button variant="danger" className=' d-flex rounded-pill me-2 align-items-center pds justify-content-center'><img alt='facebook' className='mi' src={pinterest} /><span className='dn'>439</span></Button>
            <Button variant="secondary" className=' d-flex rounded-pill align-items-center justify-content-center pds'><img alt='facebook' className='mi ' src={em} /><span className='dn'>340</span></Button>
            <Button variant="success" className='pdss me-2 ms-2 rounded-pill'><img alt='facebook' src={sharethis} /></Button>

          </Col>
          <Col sm={1} md={1} lg={1}></Col>
        </Row>
      </Container>
      <div className='p-3 text-center bg-primary'>
        <p className='mt-3 text-white l'>Copyright © 2008 - 2023 TemplateMo - About - Privacy Policy - Contact - XML Sitemap</p>
      </div>

    </div>
  )
}

export default TemplateMo
