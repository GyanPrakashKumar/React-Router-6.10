import { NavLink, Outlet } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs"

const RootLayout = () => {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>JobRouter</h1>
                    {/* A normal Link has no automated class but in NavLink has a empty class which change to active when we click on it */}
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/help">Help</NavLink>
                    <NavLink to="/careers">Careers</NavLink>
                </nav>
                <Breadcrumbs />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout
