import React from 'react'
import './style.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import facebooke from '../MOZ/facebooke.svg'
import twitter from '../MOZ/twitter.svg'
import pinterest from '../MOZ/pinterest.svg'
import em from "../MOZ/em.svg"
import sharethis from '../MOZ/sharethis.svg'
import messanger from '../MOZ/messanger.svg'
const Contact = () => {
  return (
    <div>
      <div className='container-fluid im pb-5'>
                <div className=''>
                    <div className='row'>

                        <div className='col-sm-12 col-md-6 col-lg-6'>
                            <img className='mt-5 i' src='https://templatemo.com/images/templatemo-logo-new.png' />
                            <div className='t'>
                                <p className='text-white mt-3 '>Free HTML CSS Website Templates </p>
                            </div>
                        </div>


                        <div className='col-sm-12 col-sm-6 col-lg-6'>
                            <div className='button-container mt-5 pt-5 '>
                                <button type="button" className='btnbg me-3'>Free Templates</button>
                                <button type="button" className='btnbg me-3' >HTML Templates</button>
                                <button type="button" className='btnbg me-3'>Links</button>
                                <button type="button" className='btnbg' >Contact</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='container-fluid mt-5'>
            <h2 className='gr'>TemplateMo - Web Design Links</h2>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 col-lg-8 mt-5' >
                    <h4 className='tc'> Questions and Answers about free CSS templates</h4>
                    
                    <div className='ma mt-3'>
                    <h5 className='mt-3'>1. <b>How to make Contact Form to send email?</b> </h5>
                    <p className='mar'>You can use this <span className='bl'>contact form</span> scripts for any template.</p>
                    </div>

                    <div className='ma mt-5'>
                    <h5 className='mt-3'>2. <b>
                    Are all website templates absolutely free for any kind of use?</b> </h5>
                    <p className='mar'>Yes, they are 100% free and there is no hidden charge.<br/>
                    They can be used for your commercial websites.</p>
                    </div>


                    <div className='ma mt-5'>
                    <h5 className='mt-3'>3. <b>
                    Can I modify and use free templates for my client websites and charge (sell) them?</b> </h5>
                    <p className='mar'>Yes, you can do that.</p>
                    </div>


                    <div className='ma mt-5'>
                    <h5 className='mt-3'>4. <b>How shall I contribute TemplateMo?</b> </h5>
                    <p className='mar'>You can support a <span className='bl'>little contribution via PayPal</span> and please tell your friends about our website. </p>
                    </div>



                    <div className='ma mt-5'>
                    <h5 className='mt-3'>5. <b> 
                    Can I remove credit links from templates?</b> </h5>
                    <p className='mar'>Yes, you can remove all credit links. </p>
                    </div>



                    <div className='ma mt-5'>
                    <h5 className='mt-3'>6. <b> 
                    Do I need to pay for a link removal?</b> </h5>
                    <p className='mar'>No, you do not need to pay for it. Templates are 100% FREE. </p>
                    </div> 




                    
                    <div className='ma mt-5'>
                    <h5 className='mt-3'>7. <b>  Can I request new template for my need?</b> </h5>
                    <p className='mar'>Yes, please tell us what you need. We will try our best to fulfill it.</p>
                    </div> 



                    <div className='ma mt-5'>
                    <h5 className='mt-3'>8. <b>  
                    Can I use sample images from templates on my websites?</b> </h5>
                    <p className='mar'>Yes, you can use them.</p>
                    </div> 


                    <div className='ma mt-5'>
                    <h5 className='mt-3'>9. <b>  Can I redisribute your templates on my website?</b> </h5>
                    <p className='mar'>No, this is <b>NOT</b> allowed. Please do not redistribute our templates.</p>
                    </div>


                    
                    
                   
                    </div>

                </div>
               
            </div>


            <div className='container-fluid mt-5'>
                <h4 className='cm'>Site Updates and LIVE Chat on Facebook</h4>

               <div className='d-flex mar mt-3'>
               <div>
                    <img src='https://templatemo.com/social-icons/facebook.png'/>
                </div>

                <div className='ms-3'>
                    <img src='https://templatemo.com/social-icons/twitter.png'/>
                </div>
               </div>

            </div>

            <div className='container-fluid mt-5'>
             <h4 className='cm '>Contact Email</h4>

             <p className='mt-3 pm'>Please send us a message if you have any other question. Email: info [at] templatemo [dot] com</p>
            </div>

            <Container className='  mt-5 mb-3 mt-5'>
        <Row>
          <Col sm={1} md={1} lg={1}></Col>
          <Col sm={10} md={10} lg={10} className='d-flex align-items-center justify-content-center'> <div className='d-flex flex-column justify-content-center align-items-center me-2'><strong > 1.7k</strong>
            <span className='fss '>Shares</span></div><Button variant="primary" className=' d-flex rounded-pill me-2 pds align-items-center justify-content-center'><img alt='facebook' className='mi' src={facebooke} /><span className='dn'>828</span></Button>
            <Button variant="dark" className=' d-flex rounded-pill me-2 align-items-center pds justify-content-center'><img alt='facebook' className='mi' src={twitter} /><span className='dn'>100</span></Button>
            <Button variant="primary" className=' d-flex rounded-pill me-2 align-items-center pds justify-content-center'><img alt='facebook' className='mi' src={messanger} /><span className='dn'>105</span></Button>
            <Button variant="danger" className=' d-flex rounded-pill me-2 align-items-center pds justify-content-center'><img alt='facebook' className='mi' src={pinterest} /><span className='dn'>52</span></Button>
            <Button variant="secondary" className=' d-flex rounded-pill align-items-center justify-content-center pds'><img alt='facebook' className='mi ' src={em} /><span className='dn'>238</span></Button>
            <Button variant="success" className='pdss me-2 ms-2 rounded-pill'><img alt='facebook' src={sharethis} /></Button>
            
            </Col>
          <Col sm={1} md={1} lg={1}></Col>
        </Row>
      </Container>

            <div className='p-3 text-center bg-primary'>
        <p className='mt-3 text-white'>Copyright © 2008 - 2023 TemplateMo - About - Privacy Policy - Contact - XML Sitemap</p>
      </div>
    </div>
  )
}

export default Contact
