import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <div className='error'>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>
                Sorry, the page you were trying to view does not exist.
            </p>

            <p>Try going back to the <Link to="/">Home Page</Link>.</p>
        </div>
    )
}

export default Error
