import { useState } from "react"
import { NavLink, Outlet } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs"
import { FaTimes, FaBars } from "react-icons/fa"

const RootLayout = () => {
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }


    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1> <NavLink to='/'>JobRouter</NavLink></h1>
                    {/* A normal Link has no automated class but in NavLink has a empty class which change to active when we click on it */}
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/help">Help</NavLink>
                    <NavLink to="/careers">Careers</NavLink>
                </nav>
                {
                    menu ? (
                        <FaTimes className="menuIcons" onClick={() => setMenu(!menu)} />
                    ) : (
                        <FaBars className="menuIcons" onClick={() => setMenu(!menu)} />
                    )
                }
                <Breadcrumbs />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
