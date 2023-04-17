import React from 'react'
import "../styles/About.css"
import AboutImage from "../img/banneryeni.jpg"

const About = () => {
  return (
    <div className='about'>
      <h1 className='home__menu-title'>Hakkımızda</h1>
      <img src={AboutImage} alt="about"/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus consequatur sit delectus, doloremque magnam ipsum culpa dignissimos inventore repudiandae incidunt laborum fugit quos officia at hic. Quaerat fugit consequatur quam dolor vitae! Totam voluptas accusantium officia! Maxime iste exercitationem excepturi repudiandae harum facere ab nemo quibusdam. Voluptatibus, iusto molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione temporibus consequatur sit delectus, doloremque magnam ipsum culpa dignissimos inventore repudiandae incidunt laborum fugit quos officia at hic. Quaerat fugit consequatur quam dolor vitae! Totam voluptas accusantium officia! Maxime iste exercitationem excepturi repudiandae harum facere ab nemo quibusdam. Voluptatibus, iusto molestiae.</p>
    </div>
  )
}

export default About