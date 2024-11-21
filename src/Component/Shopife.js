import React from 'react';
import logo from './pic.png';
import img from './pic1.png';
import img1 from './pic2.png';
import img2 from './pic3.png';
import './Shopife.css';
import TextField from '@mui/material/TextField';

// import Video from "./Video"

function Shopife() {




  return (
    <div>
      <div className=''>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img className="nav-img me-0 pe-0" src={logo} alt="Logo" style={{ height: '40px' }} />
              <b className="ms-0 ps-0">Shopify</b>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
              aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav m-auto my-2 my-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Solutions
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                    <li><a className="dropdown-item" href="#">Solution 1</a></li>
                    <li><a className="dropdown-item" href="#">Solution 2</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Pricing
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                    <li><a className="dropdown-item" href="#">Basic</a></li>
                    <li><a className="dropdown-item" href="#">Premium</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Resources
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
                    <li><a className="dropdown-item" href="#">Blog</a></li>
                    <li><a className="dropdown-item" href="#">Guides</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown4" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    What's New
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown4">
                    <li><a className="dropdown-item" href="#">Feature 1</a></li>
                    <li><a className="dropdown-item" href="#">Feature 2</a></li>
                  </ul>
                </li>
              </ul>

              <form className="d-flex ms-auto align-items-center">
                <a className="nav-link active me-3" aria-current="page" href="#" id="login-link">Login</a>
                <button className="btn btn-outline-light" type="submit" id="trial-button">Start Free Trial</button>
              </form>
            </div>
          </div>
        </nav>

        <header>
          <picture className="media-container">
            <source media="(max-width: 480px) and (orientation: portrait) and (prefers-reduced-motion: no-preference)" type="video/mp4; codecs=hvc1" srcSet="https://cdn.shopify.com/b/shopify-brochure2-assets/488d6fb493040e46e45a1dcb7e899e79.mp4" />
            <source media="(min-width: 481px) and (-webkit-min-device-pixel-ratio: 1) and (prefers-reduced-motion: no-preference)" type="video/mp4; codecs=hvc1" srcSet="https://cdn.shopify.com/b/shopify-brochure2-assets/033212561ae4fd44e663bcf0c28aa6fb.mp4" />
            <source media="(max-width: 480px) and (prefers-reduced-motion: no-preference)" type="image/avif" srcSet="https://cdn.shopify.com/b/shopify-brochure2-assets/82e5b0282bfbefccfd6579c35ee212f3.avif" />
            <source media="(min-width: 481px) and (prefers-reduced-motion: no-preference)" type="image/avif" srcSet="https://cdn.shopify.com/b/shopify-brochure2-assets/288aa2d76b4e7aaff082af1eb4279091.avif" />
            <img src="https://cdn.shopify.com/b/shopify-brochure2-assets/339113bc828c2c7ab760a434e1703b93.webp?originalWidth=3840&amp;originalHeight=2160&amp;width=1920&amp;height=1080" alt="Responsive Image" loading="lazy" />
          </picture>
        </header>


      </div>

      <div className='container-fluid'>
        <div className='row text-white text-center heading'>
          <div className='col-12 col-md-6 col-lg-6 '>
            <h1>Making Commerce <br />Better for Everyone</h1>
            <h4 className='pt-3'>
              Shopify is supporting the next generation of entrepreneurs,<br />
              the world's biggest brands, and everyone in between
            </h4>

            <div className='button-text-container ht d-flex  align-items-end'>
              <button className="btn btn-outline-light hw" type="submit" id="trial-button">
                Start Free Trial
              </button>
              <p className="text">Get 3 days free then 1 month <br />
                for ₹20.</p>
            </div>
          </div>

          <div className='col-sm-6 col-lg-6 col-md-6  hy d-flex justify-content-end align-items-end'>
            <button className="btn btn-outline-light  hw1" type="submit" id="trial-button">
              Start Free Trial
            </button>

          </div>
        </div>
      </div>

      {/* <section>
        <div className="container-fluid">
          <div className="row gap-0 align-items-center">
            <div className="col-md-5 col-lg-5">
              <div className='ma'>
                <img
                  className="ankit"
                  src="https://cdn.shopify.com/b/shopify-brochure2-assets/9a8a27ff99bce89686730d3bc42b9bf4.png"
                  alt="Shopify Globe"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-7">
              <b className='mb-0 pb-0'>
                <h2 className="min">
                  Discover why millions of entrepreneurs chose Shopify to build their
                  business <br />
                  <span className='M'>— from hello world to IPO.</span>
                </h2>
              </b>

              <div className='d-flex mt-0 pt-0 mn'>
                <div className='col-md-6 col-lg-6'>
                  <h1>Millions</h1>
                  <h5>of merchants worldwide</h5>
                </div>

                <div className='col-md-6 col-lg-6'>
                  <h1>170+</h1>
                  <h5>countries represented</h5>
                </div>
              </div>

              <div className='d-flex mt-0 pt-0'>
                <div className='col-md-6 col-lg-6'>
                  <h1>10%</h1>
                  <h5>of total US ecommerce
                  </h5>
                </div>

                <div className='col-md-6 col-lg-6'>
                  <h1>$444B</h1>
                  <h5>global economic activity</h5>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="container-fluid">
          <div className="row gap-0 align-items-center">
            <div className="col-md-5 col-lg-5">
              <div className='ma'>
                <img
                  className="ankit"
                  src="https://cdn.shopify.com/b/shopify-brochure2-assets/9a8a27ff99bce89686730d3bc42b9bf4.png"
                  alt="Shopify Globe"
                  style={{ Width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-7">
              <b className='mb-0 pb-0'>
                <h2 className="min">
                  Discover why millions of entrepreneurs chose Shopify to build their
                  business <br />
                  <span className='M'>— from hello world to IPO.</span>
                </h2>
              </b>

              <div className='row mt-0 pt-0 mn'>
                <div className='col-6'>
                  <h1>Millions</h1>
                  <h5>of merchants worldwide</h5>
                </div>

                <div className='col-6'>
                  <h1>170+</h1>
                  <h5>countries represented</h5>
                </div>
              </div>

              <div className='row mt-0 pt-0'>
                <div className='col-6'>
                  <h1>10%</h1>
                  <h5>of total US ecommerce</h5>
                </div>

                <div className='col-6'>
                  <h1>$444B</h1>
                  <h5>global economic activity</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      <div className='container-fluid '>

        <b> <p className='t'>
          EXPLORE THE WORLD'S LARGEST COMMERCE COMMUNITY
        </p></b>

        <div className='row mt-5'>
          <div className='col-lg-1 col-md-1 col-sm-12'></div>
          <div className='col-lg-2 col-md-2 col-sm-12'> <div class="card h-100">
            <img style={{ height: "60px", width: "70px" }} className='aa'
              src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/icons/layers-75e27771a1461d41eeea6d3776873fcf0dca705afb334adadb0c7dc0a20b0404.svg" alt="" />
            <div class="card-body">
              <h5>Enterprise</h5>
              <p>The modern, composable <br />
                stack for enterprise retail
              </p>
            </div>
          </div>
          </div>



          <div className='col-lg-2 col-md-2 col-sm-12 pt-2'> <div class="card h-100">
            <img style={{ height: "60px", width: "70px" }} className='aa'
              src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/icons/infinity-ea665cc8ef4b2379465495ba43cd5cdbba88cd70dd51c6fa59aec331fd2336be.svg" alt="" />
            <div class="card-body">
              <h5>Plus</h5>
              <p>A Commerce Solution for<br />
                growing digital brands
              </p>
            </div>
          </div></div>
          <div className='col-lg-2 col-md-2 col-sm-12 pt-2'> <div class="card h-100">
            <img style={{ height: "60px", width: "70px" }} className='aa'
              src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/icons/partners-d453b53d9ff10a630080d24563478935f3d1b10de8eb15bef9f13fe58be3f8de.svg" alt="" />
            <div class="card-body">
              <h5>Partners</h5>
              <p>Offer your expertise to
                Shopify merchants all over
                the world
              </p>
            </div>
          </div></div>
          <div className='col-lg-2 col-md-2 col-sm-12 pt-2'> <div class="card h-100">
            <img style={{ height: "60px", width: "70px" }} className='aa'
              src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/icons/dev-82bdbe630a35ca679000d2177f4e32d44b5455e906f0a7ff628c3eadbee38c8e.svg" alt="" />
            <div class="card-body">
              <h5>Developers</h5>
              <p>Bulid the Future of Commerce <br />
                with Shopife's powerful API
              </p>
            </div>
          </div></div>
          <div className='col-lg-2 col-md-2 col-sm-12 pt-2'> <div class="card h-100">
            <img style={{ height: "60px", width: "70px" }} className='aa'
              src="https://cdn.shopify.com/b/shopify-brochure2-assets/fc4cebbadfd9af383ccd031219260b7d.svg" alt="" />
            <div class="card-body">
              <h5>Retail stores</h5>
              <p>The complete system for <br />
                selling in person
              </p>
            </div>
          </div></div>
          <div className='col-lg-1 col-md-1 col-sm-12'></div>
        </div>





      </div>





      <section className="bc mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 col-sm-8 col-12">
              <div className="text-left heading-group">
                <p>Build an online store</p>
                <h2>Your store, your way</h2>
              </div>
            </div>
          </div>
        </div>




        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-lg-12 col-md-12'>
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/carousel-2-mobile-small-b3fd61960ed47643ca39fc0fc54d435f77369ddadc3f163ec91fc5a806b33ace.png" className="d-block w-100 custom-carousel-img" alt="Mobile friendly themes" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/carousel-3-mobile-small-f586e6a7e1563512c0524687fe15f2f748c8849992c080de3ae60365d9b5d211.png" className="d-block w-100 custom-carousel-img" alt="Mobile friendly Shopify Apps" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/carousel-1-mobile-small-21ae4e287eb9c87f9eeca84adbc0c9aaf8fd13ff6cce71c01f0202aabba27b92.png" className="d-block w-100 custom-carousel-img" alt="Mobile friendly online storefront" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>


        <div className='container'>
          <div className='row'>
            <div className='col-md-4 col-lg-4'>
              <hr />
              <h5>Build  an online storefront</h5>

              <p>Sell online, in person, and around the world with the marketing tools, social integrations, and sales channels you need to get your products in front of customers.</p>

              <h6 class="underline-arrow">Online store Builder</h6>

            </div>

            <div className='col-md-4 col-lg-4'>
              <hr />
              <h5>Craft the brand you want</h5>

              <p>Sell online, in person, and around the world with the marketing tools, social integrations, and sales channels you need to get your products in front of customers.</p>


              <h6 class="underline-arrow">Theme Store</h6>
            </div>


            <div className='col-md-4 col-lg-4'>
              <hr />
              <h5>Level up with apps</h5>

              <p>Sell online, in person, and around the world with the marketing tools, social integrations, and sales channels you need to get your products in front of customers.</p>

              <h6 class="underline-arrow">Shopife App Store</h6>
            </div>

          </div>

        </div>

      </section>




      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-8 col-lg-8'>
            <h6>SALES CHANNELS</h6>
            <h1>Sell to every buyer, everywhere</h1>
          </div>

          <div className='col-md-4 col-lg-4'>
            <p>Sell online, in person, and around the world with the marketing tools, social integrations, and sales channels you need to get your products in front of customers.</p>

            <h6>Start selling</h6>
            <hr />

          </div>
        </div>


        <div className='container mt-5'>
          <div className='row'>
            <div className='col-md-4 col-lg-4 '>
              <img src='https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/sell-buyer-small-f7a1e59a62226c554e7691b17a1af76c06978bd41ce78d4f980446ed1bfcaad6.webp' />

            </div>


            <div className='col-md-4 col-lg-4 pt-2'>
              <img src='https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/marketing2-small-2a712ec8dc64d2b33a2ddd9346f5ebeb8d87d616831d14cb32dcef3e06302598.png' />

            </div>

            <div className='col-md-4 col-lg-4 pt-2'>
              <img src='https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/marketing3-small-6582aefc08f96962465ba3e4579af9e7c1fd338571c1ac96de8999feb106c05f.png' />
            </div>
          </div>
        </div>
      </div>





      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 pt-5 mt-3'>
            <div className='back'>
              <div class="card cardback" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='mt-5 pt-5 ms-5'>
              <p>FAST, RELIABLE CHECKOUT</p>
              <p className='fs-1 fw-bold'>The best-converting <br /> checkout on the planet</p>
              <p>Back your business with Shop Pay—the one-click <br /> checkout that's built to convert.</p>
              <TextField id="filled-basic" label="Filled" variant="filled" />
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
          </div>
        </div>
      </div>




      <div className='container d-flex'>
        <div className='row'>
          <div className='col-sm-12 col-lg-6 col-md-6 pt-5 mt-5'>
            <h6>POINT OF SALE</h6>
            <b><h1>Flexible point of sale to<br /> power your retail store</h1></b>
            <br />
            <p className='s'>A POS system that allows customers to shop their<br />
              way, from online to checkout line.</p>

            <div className='d-flex align-items-center'>
              <div className='left-arrow'>
                <h1>→</h1>
              </div>

              <div className='mt-4 hover-text'>
                <h5>Meet Shopife POS</h5>
                <hr />
              </div>

              <div className='right-arrow'>
                <h1>→</h1>
              </div>
            </div>
          </div>

          <div className='col-sm-12 col-md-6 col-lg-6'>
            <img src='https://cdn.shopify.com/shopifycloud/brochure/assets/home/redesign2022/pos-2-small-2bceb2e9fd90de0e825252632b00f723978536c6c4535e44468dfc31a7cef8f0.webp' />
          </div>

        </div>
      </div>





      <div className='container-fluid bg mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-6 col-sm-12'>
              <h5 className='A pt-5'>BUILT-IN MARKETING TOOLS</h5>
              <br />
              <h1 className='B'>From first touch to full funnel </h1>
            </div>

            <div className='col-md-6 col-lg-6 col-sm-12'>
              <h4 className='mt-5 text-end'>Leverage our full marketing suite</h4>
            </div>
          </div>
        </div>


        <div className='container'>
          <div className='row'>

            <div className='col-sm-12 col-md-6 col-lg-7 mt-5'>
              <div className='d-flex'>
                <div>
                  <img
                    className="nav-img custom-img"
                    src={img}
                    alt="img"
                  />
                </div>
                <div>
                  <h3 className="custom-heading">Reach new leads</h3>
                </div>
              </div>

              <p className='mt-3 f'>Find new shoppers with the SEO, social media, and content marketing<br />
                tools that help you reach customers where they are.
              </p>
              <hr className='fw-bolder' />

            </div>

            <div className='container'>
              <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-7 mt-5'>
                  <div className='d-flex'>
                    <div>
                      <img
                        className="nav-img custom-img"
                        src={img1}
                        alt="img1"
                      />
                    </div>
                    <div>
                      <h3 className="custom-heading">Engage with customers</h3>
                    </div>
                  </div>

                  <p className='mt-3 f'>Bulid custom email  campaingns, set  automations  to serve  every segment,<br>
                  </br>and  connect with customers on the go with integrated messaging tools.

                  </p>
                  <hr className='fw-bolder' />

                </div>

              </div>

            </div>

            <div className='container'>
              <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-7 mt-5'>
                  <div className='d-flex'>
                    <div>
                      <img
                        className="nav-img custom-img"
                        src={img2}
                        alt="img2"
                      />
                    </div>
                    <div>
                      <h3 className="custom-heading">Data you can build  on</h3>
                    </div>
                  </div>

                  <p className='mt-3 f'>Take control of  your customers data to build custom
                    audiences and explore <br />the customer   insights that drive ongoing growth.
                  </p>
                  <hr className='fw-bolder' />

                </div>
              </div>
            </div>
          </div>
        </div>














      </div>






    </div >




  );
}

export default Shopife;

