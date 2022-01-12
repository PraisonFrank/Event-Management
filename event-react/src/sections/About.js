import React from 'react'
import SectionHeading from '../components/SectionHeading'

const About = () => {
    return (
        <section className="about section">
        <div className="left">
        <SectionHeading title='About'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, iste. Vel amet incidunt suscipit libero est quae labore iste? Dolorum unde possimus eligendi molestiae cum repudiandae sequi enim, esse ipsum.</p>

        </div>
        <div className="right">
            <img src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="About Image" />

        </div>
    </section>
    )
}

export default About
