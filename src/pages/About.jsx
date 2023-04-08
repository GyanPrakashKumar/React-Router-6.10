import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const About = () => {
    const [users, setUsers] = useState('gyan')
    if (!users) {
        return <Navigate to='/' replace={true} />
    }
    return (
        <div className='about'>
            <h2>About Page</h2>
            <button className='logOut' onClick={() => setUsers(null)} >
                Logout
            </button>
            <p>
                This is a Job Board App. It is a simple example of a React Router
                DOM app.
                On this website you can post jobs, and apply for jobs. You can also
                search for jobs. The jobs are stored in a database. The database is a
                JSON file. The JSON file is stored in a folder called data. The data
                folder is in the root folder of the project.

                About jobs: The jobs are stored in a database. The database is a
                JSON file. The JSON file is stored in a folder called data. The data
                folder is in the root folder of the project.

                Here you can find a list of all the jobs that are currently posted on
                this website. You can also search for jobs. You can search for jobs
                by title, or by location. You can also search for jobs by both title
                and location. You can also search for jobs by both title and location.
            </p>
        </div>
    )
}

export default About
