const bodyParser = require('body-parser');
const express = require('express');
const { addUserDetails, fetchUserDetails, fetchJobs, editJob, createJobs } = require('./database');
const cors = require('cors');

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.post("/login", (req, res) => {
    let data = req.body
    console.log(data);
    
    if (req.body.email && req.body.password) {
        let userDetails = fetchUserDetails(data)
        userDetails.then((val) => {
            delete val.password
            val ? res.send(val) : res.send({
                error : "The user is not existing.."
            })
        }).catch((err) => {
            res.send(err)
        })

    }
    else {
        res.send({
            error : "invalid email or password"
        })
    }


})
app.post("/signup", async (req, res) => {
    let data = req.body    
    if (req.body.email && req.body.password) {
        let user = await addUserDetails(data)
        // user.data.userDetails = data
        res.send(user)
    }
    else {
        res.send("email or password not found")
    }
})
app.get("/jobs", (req, res) => {
    let jobs = fetchJobs(req.body)
    jobs.then((val) => {
        res.send(val)
    }).catch((err) => {
        res.send(err)
    })
})
app.post("/jobs", (req, res) => {
    let data = req.body
    if (data?.title && data?.description && data?.location && data?.salary && data?.user === "admin") {
        let job = createJobs(data)  
        job.then((val) => {
            res.send(val)
        }).catch((err) => {
            res.send(err)
        })
    }
    else {
        res.send("job details not found")
    }
})
app.patch("/jobs", (req, res) => {
    let data = req.body
    if (data?.title && data?.description && data?.location && data?.salary && data?.user === "admin") {
        let updatedJob = editJob(data)
        updatedJob.then((val) => {
            res.send(val)
        }).catch((err) => {
            res.send(err)
        })
    }
    else {
        res.send("job details not found or user not admin")
    }
})
app.listen(3001, () => {
    console.log("port running 3001");
})
