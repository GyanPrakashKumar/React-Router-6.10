import { NavLink, Outlet } from "react-router-dom"

const RootLayout = () => {
    return (
        <header>
            <nav>
                <h1>JobRouter</h1>
                {/* A normal Link has no automated class but in NavLink has a empty class which change to active when we click on it */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/help">Help</NavLink>
            </nav>

            <main>
                <Outlet />
            </main>
        </header>
    )
}

export default RootLayout
