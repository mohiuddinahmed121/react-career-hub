import { json } from "react-router-dom";

const getStoredJobApplicaton = () => {
  const storedJobApplication = localStorage.getItem("job-applications");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveJobApplication = (id) => {
  const storedJobApplication = getStoredJobApplicaton();
  const exists = storedJobApplication.find((jobId) => jobId === id);
  if (!exists) {
    storedJobApplication.push(id);
    localStorage.setItem(
      "job-applications",
      JSON.stringify(storedJobApplication)
    );
  }
};

export { getStoredJobApplicaton, saveJobApplication };
