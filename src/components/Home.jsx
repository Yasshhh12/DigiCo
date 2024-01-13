import React from 'react'
import vg from "../images/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai';

const Home = () => {
  return (
    <>
        <div className='home' id='home'>
        <main>
          <h1>DigiCo</h1>
          <p>Solution to your all Problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
        <p>
          We are your one and only solution to the tech problems
          you face everyday.
          We are leading tech company whose aim is to increase the 
          problem solving ability in children.
        </p>
      </div>
      </div>

      <div className="home3" id='about'>
        <div>
          <h1>Who we are?</h1>
          <p>
          Welcome to DigiCo, where innovation drives results. We are a team of tech enthusiasts on a mission to redefine what's possible in the digital realm.

          Mission:
          Empower through innovation. We transform challenges into opportunities, delivering cutting-edge solutions that elevate businesses and individuals.

          Values:

          Innovation: Creativity fuels us.
          Integrity: Trust is non-negotiable.
          Collaboration: Teamwork powers progress.
          Excellence: Perfection is our pursuit.
          Why Choose Us:

          Expertise: Seasoned professionals.
          Custom Solutions: Tailored for success.
          Client-Centric: Your goals, our priority.
          
          Join the Journey:
          Whether you're a client, partner, or talent, join us in shaping the future of tech. Let's create something extraordinary together.

          Thank you for choosing DigiCo. Innovation starts here.
          </p>
        </div>
      </div>

      <div className="home4" id='brands'>
        <div>
         <h1>Brands</h1>

          <article>
            <div style={{
              animationDelay:"0.3s"
            }}>
            <AiFillGoogleCircle />
            <p>Google</p>
            </div>
            <div style={{
              animationDelay:"0.5s"
            }}>
            <AiFillAmazonCircle />
            <p>Amazon</p>
            </div>
            <div style={{
              animationDelay:"0.7s"
            }}>
            <AiFillYoutube />
            <p>Youtube</p>
            </div>
            <div style={{
              animationDelay:"1s"
            }}>
            <AiFillInstagram />
            <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home