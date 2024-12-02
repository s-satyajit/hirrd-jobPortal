import { getJobs } from "@/api/apiJobs";
import React, { useEffect, useState } from "react";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";

const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [company_id, setCompany_id] = useState("");
  const { isLoaded } = useUser();

  const {
    fn: fnJobs,
    data: jobs,
    loading: loadingJobs,
  } = useFetch(getJobs, {
    searchQuery,
    location,
    company_id,
  });

  //   console.log(jobs)

  useEffect(() => {
    if (isLoaded) fnJobs();
  }, [isLoaded]);

  return (
    <div>
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
        Latest Jobs
      </h1>

      {/* Add filters here */}

      {loadingJobs && (
        <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />
      )}

      {loadingJobs === false && (
        <div>
          {jobs?.length ? (
            jobs.map((job) => {
              return <span>{job.title}</span>
            })
          ) : (
            <div>No Jobs Found 😢</div>
          )}
        </div>
      )}

    </div>
  );
};

export default JobListing;
