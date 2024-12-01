import { getJobs } from "@/api/apiJobs";
import React, { useEffect } from "react";
import useFetch from "@/hooks/use-fetch";

const JobListing = () => {
  const {
    fn: fnJobs,
    data: dataJobs,
    loading: loadingJobs,
  } = useFetch(getJobs, {});

//   console.log(dataJobs)

  useEffect(() => {
    fnJobs();
  }, [])

  return <>Job Listing</>;
};

export default JobListing;
