import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplicaton } from "../utility/localstorage";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplicaton();
    if (jobs.length > 0) {
      const jobsApplied = [];
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          jobsApplied.push(job);
        }
      }
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <h2 className="text-2xl text-center font-bold my-12">Applied Jobs</h2>
      <details className="dropdown">
        <summary className="btn my-3">Filter By</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={() => handleJobsFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter("onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {displayJobs.map((job) => (
          <>
            <div className="flex justify-between items-center border border-blue-950 p-6 my-9">
              <div className="flex items-center">
                <figure className="w-[240px] h-[240px] bg-white flex items-center justify-center mr-6">
                  <img
                    className="w-[145px] h-[50px]"
                    src={job.logo}
                    alt="Shoes"
                  />
                </figure>
                <div className="">
                  <h2 className="card-title">{job.job_title}</h2>
                  <p>{job.company_name}</p>
                  <div>
                    <button className="px-5 py-2 font-extrabold  border rounded border-[#7E90FE] text-[#7E90FE] mr-4">
                      {job.remote_or_onsite}
                    </button>
                    <button className="px-5 py-2 font-extrabold  border rounded border-[#7E90FE] text-[#7E90FE] mr-4">
                      {job.job_type}
                    </button>
                  </div>
                  <div className="flex mt-4">
                    <h2 className="flex mr-4">
                      <MdOutlineLocationOn className="text-2xl mr-2"></MdOutlineLocationOn>
                      {job.location}
                    </h2>
                    <h2 className="flex">
                      <AiOutlineDollarCircle className="text-2xl mr-2"></AiOutlineDollarCircle>
                      {job.salary}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
            {/* <h1>{job.job_title}</h1>
            <p>{job.company_name}</p>
            <p>{job.remote_or_onsite}</p> */}
          </>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
