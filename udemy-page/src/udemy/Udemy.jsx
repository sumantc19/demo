import React from 'react'
import './Udemy.css'

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TbWorld } from "react-icons/tb";


function Udemy() {


    
  return (
    <>


  



 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>   
 <div class="first">
         <header class="head">Welcome to Udemy Course|Learn to work,lead and live</header>
    </div>
  
    <div className='mainbar'>
    <nav>
            <span className='logo'></span>
            <div class="sectpre">
                <div class="categorydrop">
                    <div ><p>Categories</p></div>
                    <div class="dropdownnav">
                        <ul>
                            <div class="dropdownnavchildsection">
                                <li>Development</li>
                                <div class="dropdownnavchild">
                                    <ul>
                                        <li>Business</li>
                                        <li>Finance and Accounting</li>
                                        <li>IT and Software</li>
                                        <li>Personal Developent</li>
                                        <li>Design</li>
                                        <li>Marketing</li>
                                        <li>Lifestyle</li>
                                        <li>Photograpy and Video</li>
                                        <li>Health and Fitness</li>
                                        <li>Music</li>
                                    </ul>
                                </div>
                            </div>
                            <li>Business</li>
                            <li>Finance and Accounting</li>
                            <li>IT and Software</li>
                            <li>Personal Developent</li>
                            <li>Design</li>
                            <li>Marketing</li>
                            <li>Lifestyle</li>
                            <li>Photograpy and Video</li>
                            <li>Health and Fitness</li>
                            <li>Music</li>
                        </ul>
                    </div>
                </div>
            </div>
            <input type="search" placeholder='      Search for anything'/>
            <p>Plans & Pricing</p>
            <div class="udemybizdrop">
                        <p>Udemy Business</p>
                        <div class="udemybizdropchild">
                            <h2>Get your team access to over<br/> 15,000 top Udemy courses,<br/>anytime, anywhere.</h2>
                            <button>Try Udemy Business</button>
                        </div>
                    </div>
                    <div class="udemybizdrop">
                        <p>Teach on Udemy</p>
                        <div class="udemybizdropchild">
                            <h2>Get your team access to over<br/> 15,000 top Udemy courses,<br/>anytime, anywhere.</h2>
                            <button>Try Udemy Business</button>
                        </div>
                    </div>
            <i><MdOutlineShoppingCart /></i>
            <button className='btn1' >Log in</button>
            <button  className='btn2'>Sign up</button>
            <div className='icon'><TbWorld /></div>
        </nav>
    </div> 



    {/* carouselllllllllllllllllllllllllllllllllllllllllllllllll */}
    <div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://img-c.udemycdn.com/notices/home_carousel_slide/image/12c0830f-aa27-4843-993d-b440aa389991.jpeg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://img-c.udemycdn.com/notices/home_carousel_slide/image/bb0acdaf-d3e9-41dc-9d51-bfcf2b526ba1.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://img-c.udemycdn.com/notices/home_carousel_slide/image/12c0830f-aa27-4843-993d-b440aa389991.jpeg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    </div>

{/* 
  taggggggggggggggggggggggggggggggggggggggggggggggggg */}
  
     <div class="fourth">
        <h1 class="fhead">All the skills you need in one place</h1>
        <p class="para">From critical skills to technical topics, Udemy supports your professional development</p>
    </div>
    <div class="fifth">
        
        <a href="">Web Development</a>
        <a href="">IT certificate</a>
        <a href="">Leadership</a>
        <a href="">Data Science</a>
        <a href="">Communication</a>
        <a href="">Business Analytics</a>
      
       
    </div>
    <hr class="line"/>
    <div class="sixth">
        <button class="ii" type="text"  >
            <h1 class="h">Web development</h1>
            <p class="p">13M+ views</p>
        </button>
        <button class="ii" type="text"  >
            <h1 class="h">React js</h1>
            <p class="p">4M+ views</p>
        </button>
        <button class="ii" type="text"  >
            <h1 class="h">Java script</h1>
            <p class="p">13M+ views</p>
        </button>
        <button class="ii" type="text"  >
            <h1 class="h">Node js</h1>
            <p class="p">13M+ view</p>
        </button>
        {/* <button class="ii" type="text"  >
            <h1 class="h">Core java</h1>
            <p class="p">13M+ views</p>
        </button> */}
       
    </div>
    <div className="cont">
            <div className="box">
              <img src="https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg" alt="" />
              <h6 > &nbsp;&nbsp;The Complete 2024 Web <br />&nbsp; Developtment Bootcamp</h6>
              <p class="dr">Dr.Angela</p>
             < p> <span class="rate">4.7</span > <span class="ratings"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>
             <span class="rati">(379,999)</span>
              </p>
              <p class="amt">₹3,090</p>
              {/* <button class="but">Best seller</button> */}
            </div>
            <div className="box">
              <img src="https://media.licdn.com/dms/image/C4E0DAQEr280WHxkM4Q/learning-public-crop_288_512/0/1634577489090?e=2147483647&v=beta&t=6nebfEIMohl05tjtXlvXjwydxNhOshH-8JIXqTehltE" alt="" />
              <h6 > &nbsp;&nbsp; 100 days of code:Java full stack <br />&nbsp; web developer</h6>
            
             < p> <span class="rate">4.7</span > <span class="ratings"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>
             <span class="rati">(379,999)</span>
              </p>
              <p class="amt">₹3,090</p>
           
            </div>
            <div className="box">
            <img src="https://www.aimsetters.org/wp-content/uploads/2021/04/speaker_meeting_46290858.jpg" alt="" />
              <h6 > &nbsp;&nbsp;The Complete 2024 Web <br />&nbsp; Developtment Bootcamp</h6>
             
             < p> <span class="rate">4.7</span > <span class="ratings"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>
             <span class="rati">(379,999)</span>
              </p>
              <p class="amt">₹3,090</p>
             
            </div>
            <div className="box">
            <img src="https://gbs.ac.ae/media/dorphi0q/hero-image-education-training.jpg?anchor=center&mode=crop&width=960&height=634&rnd=133246919890100000" alt="" />
              <h6 > &nbsp;&nbsp;The Complete 2024 Web <br />&nbsp; Developtment Bootcamp</h6>
              
             < p> <span class="rate">4.7</span > <span class="ratings"><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt /></span>
             <span class="rati">(379,999)</span>
              </p>
              <p class="amt">₹3,099</p>
             
            </div>
           </div>


{/* 
part1111111111111111111111111111111111111111111111111111111111111111111 */}

<div>
<h1 class="hh1">Learning focused on your goals</h1>
          <div class="eight">
            
           <div class="hfc">
           
                        <div className="dim">
                            <img src="https://cms-images.udemycdn.com/96883mtakkm8/7kN9RBFSMFNHzsGWsElMPi/dde73f8d1c47e046f035274e78410590/hands-on-practice.png" alt="" />
                            <p><h1 class="hrh">Hands-on training </h1>Upskill effectively with AI-powered coding exercises, practice tests, skills assessments, labs, and workspaces.</p>
                        </div>
                        <div className="dim">
                            <img src="https://cms-images.udemycdn.com/96883mtakkm8/2Xh9YHJustDwCEjn5IlO25/93e9b15c6e74876db0dec63466fcc5a0/certificate.png" alt="" />
                            <p><h1 class="hrh">Certification prep</h1>Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.</p>
                        </div>
                        <div className="dim">
                            <img src="https://cms-images.udemycdn.com/96883mtakkm8/6w8plrr7vY9rIY46UuX0q5/2f0a3f0c22e99bd2d430b998c81321f2/empty-state-1.png" alt="" />
                            <p><h1 class="hrh">Insights and analytics</h1>Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.</p>
                        </div>
                        <div className="dim">
                            <img src="https://cms-images.udemycdn.com/96883mtakkm8/2tKGBrb1N60wox2Lh8j3tz/7f1528c9f88ea47bd6ebb46f345902c3/organizations-2.png" alt="" />
                            <p><h1 class="hrh">Customizable content</h1> Create tailored learning paths for team and organization goals and even host your own content and resources.</p>
                        </div>
                    </div>
                    <img src="https://cms-images.udemycdn.com/96883mtakkm8/4kbyXne3Slx9Sfz4nTBqdf/8ac2b75db1a118f15e2fb5dfe2bb4567/desktop-hands-on-learning-2x.png" alt="" id="im" />
                </div>

                
</div>

  {/* part2222222222222222222222222222222222222222222222222222222222 */}

     <div className='mainglblrn'>
    
           <div className="nin1">
                    <h1 className="hhh1">Top trends for the<br></br> future of work</h1>
                    <p>GenAI and leadership are at the core <br />of today's skills-based economy.<br/> Get the 2024 Global Learning & Skills Trends<br/> Report to learn more.</p>
                    <button className="btbt">Get the Report <i className="fa-solid fa-arrow-right"></i></button>
                  </div>
    
      <div className='mnglb2'>
<img  className='globallrn' src="https://cms-images.udemycdn.com/content/ag3rqs5nxw/png/2024_Angled_Trends_report_image.png?position=c&quality=80&x.app=portals" alt="Collage of images for the latest Udemy Business reports" loading="lazy"></img>
      </div>
     </div>


           {/* fooooterrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr */}
     <footer>
      <div class="foot">
      <div class="last">
        <h4 class="pp">Top companies choose <span class="last1">Udemy Business</span> to build in-demand career skills.</h4>
        <hr class="line1"/>
      </div>
        <div class="lists">
          <ul>
            <li>Udemy Business</li>
            <li>Teach on udemy</li>
            <li>get the app</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <li>Careers</li>
            <li>Blog</li>
            <li>Help and Support</li>
            <li>Affiliate</li>
            <li>investor</li>
          </ul>
          <ul>
            <li>Terms</li>
            <li>Privacy policy</li>
            <li>Cookie settings</li>
            <li>Sitemap</li>
            <li>Accessibility statement</li>
          </ul>
        </div>
        <p className='lstinc'>© 2024 Udemy, Inc.</p>
        <img class="pics" src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="" />
       
        </div> 
        
     </footer>  
  





    </>
  )
}

export default Udemy



    