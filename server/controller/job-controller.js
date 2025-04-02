import Job from "../models/job.js";


export const saveJobData = async (request, response) => {
    try{
        const newJob = new Job(request.body);
        console.log("Incoming data:", request.body);


        await newJob.save();
        response.status(200).json({message: "Job saved successfully"});
    }
    catch(error){
        console.log(error.message);
        response.status(500).json({message: "Error saving job"});
    }
}

export const getJobData = async (request, response) => {
    try{
        const jobs = await Job.find({});
        response.status(200).json(jobs);
    }
    catch(error){
        console.log(error.message);
        response.status(500).json({message: "Error retrieving jobs"});
    }
}