import { useLoaderData, useParams } from 'react-router-dom'

export const CareerDetails = () => {
    const { id } = useParams();
    const career = useLoaderData();
    return (
        <div className='career-details'>
            <h2>Career Details for {career.title}</h2>
            <p>Based in {career.location}</p>
            <p>Salary: {career.salary}</p>
            <div className='details'>
                Job Description:<br />
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur corrupti omnis voluptates nobis vitae nisi sunt consequuntur quos dignissimos numquam!
            </div>
        </div>
    )
}

// loader for the career details page
export const CDLoader = async ({ params }) => {
    const res = await fetch(`http://localhost:4000/careers/${params.id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch career details');
    }
    return res.json()
}
