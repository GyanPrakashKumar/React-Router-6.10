import { Link, useRouteError } from 'react-router-dom'

const CError = () => {
    const error = useRouteError();
    
    return (
        <div>
            <h2>Error 😲</h2>
            <p>Sorry, {error.message}</p>
            <Link to='/careers'>Back to Careers</Link>
        </div>
    )
}

export default CError
