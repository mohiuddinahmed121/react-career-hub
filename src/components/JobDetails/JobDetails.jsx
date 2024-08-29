import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../utility/localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast("You have applied successfully");
  };

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-4 my-12">
        <div className="border md:col-span-3 p-5">
          <h2 className="text-4xl mb-5">Job Details</h2>
          <p className="mb-5">
            <span className="font-bold">Job Description: </span>
            {job.job_description}
          </p>
          <p className="mb-5">
            <span className="font-bold">Job Responsibility: </span>{" "}
            {job.job_responsibility}
          </p>
          <p className="mb-5">
            <span className="font-bold">Educational Requirements: </span>
            {job.educational_requirements}
          </p>
          <p>
            <span className="font-bold">Experiences:</span> {job.experiences}
          </p>
        </div>
        <div className="border p-2">
          <h2 className="text-2xl mb-3 font-bold">Job Details</h2>
          <p>
            <span className="font-bold mb-2">Salary:</span> {job.salary}
          </p>
          <p>
            <span className="font-bold">Job Title:</span> {job.job_title}
          </p>
          <h2 className="text-2xl mb-2 mt-5 font-bold">Contact Information</h2>
          <p>
            <span className="font-bold mb-2">Phone: </span>{" "}
            {job.contact_information.phone}
          </p>
          <p>
            <span className="font-bold mb-2">Email: </span>{" "}
            {job.contact_information.email}
          </p>
          <p>
            <span className="font-bold">Address: </span>{" "}
            {job.contact_information.address}
          </p>
          <button
            onClick={handleApplyJob}
            className="btn btn-primary w-full mt-10"
          >
            Apply button
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
