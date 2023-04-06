import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HelpLayout = () => {
    return (
        <div className='help-layout'>
            <h2>Website Help</h2>
            <p>Here you can find help for the website</p>

            <nav>
                <NavLink to="faq">View the FAQ</NavLink>
                <NavLink to="contact">Contact us</NavLink>
            </nav>

            <Outlet />
        </div>
    )
}

export default HelpLayout
