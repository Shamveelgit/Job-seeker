import { Button } from '@mui/material'
import React from 'react'


const Browse = () => {
    const jobs = [
        {
            id: 1, title: "Software Engineer", company: "Google",
            location: "Banglore"
        },
        {
            id: 2, title: "Data Scientist", company: "Amazon",
            location: "Hyderabad"
        },

    ]

    return (
        <div>
            <h2>Browse</h2>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        <h3>{job.title}</h3>
                        <p>{job.company}-
                            {job.location}</p>
                        <Button color="success" variant='contained'>Apply</Button>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default Browse