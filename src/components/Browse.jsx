import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'


const Browse = () => {

    const [jobs, setJobs] = React.useState([])

    let readJobs =async () => {
        let jobs = await axios.get("http://localhost:3001/jobs")
        setJobs(jobs.data);        
        console.log(jobs.data);
        
    }
    useEffect(() => {
        readJobs();
    },[])

    return (
        <div>
            <h2>Browse</h2>
            <ul>
                {jobs.map((job) => (
                    <li key={job._id}>
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