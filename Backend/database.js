
const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://jobportal2:312814@cluster0.3ozk2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = "mongodb://127.0.0.1:27017";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const checkUser = async (data) => {
  let user = await fetchUserDetails(data)
  return user ? false : true
}

async function fetchUserDetails(data) {
  try {
    await client.connect()
    const database = client.db("job_portal")
    const collection = database.collection("users")
    const users = await collection.findOne(data)
    return users
  }
  catch (err) {
    console.log("No user details")
    return false
  }
  finally {
    await client.close();
  }
}
async function addUserDetails(data) {
  let temp = {
    email: data?.email
  }
  if (await checkUser(temp)) {
    try {
      await client.connect()
      const database = client.db("job_portal")
      const collection = database.collection("users")
      const users = await collection.insertOne(data)
      console.log(data);
      console.log("User added succesfully")
      return {
        "message": "User added successfully",
        users,
        data
      }
    }
    catch (err) {
      console.log(err);

      console.log("User not added")
      return {
        "error": "error adding user"
      }
    }
    finally {
      await client.close();
    }
  }
  else {
    return {
      "error": "User already exists"
    }
  }
}
async function createJobs(data) {
  try {
    await client.connect()
    const database = client.db("job_portal")
    const collection = database.collection("jobs")
    const jobs = await collection.insertOne(data)
    console.log("Job added succesfully")
    return {
      "message": "Job added successfully",
      "data": jobs
    }
  }
  catch (err) {
    console.log("No job details")
    return false
  }
  finally {
    await client.close();
  }
}
async function editJob(data) {
  try {
    await client.connect()
    const database = client.db("job_portal")
    const collection = database.collection("jobs")
    const jobs = await collection.updateOne({ _id: ObjectId(data._id) }, { $set: data })
    console.log("Job edited succesfully")
    return {
      "message": "Job edited successfully",
      "data": jobs
    }
  }
  catch (err) {
    console.log("No job details")
    return false
  }
  finally {
    await client.close();
  }
}
async function deleteJob(data) {
  try {
    await client.connect()
    const database = client.db("job_portal")
    const collection = database.collection("jobs")
    const jobs = await collection.deleteOne({ _id: ObjectId(data._id) })
    console.log("Job deleted succesfully")
    return {
      "message": "Job deleted successfully",
      "data": jobs
    }
  }
  catch (err) {
    console.log("No job details")
    return false
  }
  finally {
    await client.close();
  }
}
async function fetchJobs(data) {
  try {
    await client.connect()
    const database = client.db("job_portal")
    const collection = database.collection("jobs")
    const jobs = await collection.find(data).toArray()
    return jobs
  }
  catch (err) {
    console.log("No job details")
    return false
  }
  finally {
    await client.close();
  }
}
module.exports = { fetchUserDetails, addUserDetails, fetchJobs, deleteJob, editJob, createJobs }