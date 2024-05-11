/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import axios from "axios";

const TabCategories = () => {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const getData = async () => {
      const {data} = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
      setJobs(data)
    }
    getData()
  },[])


  return (
    <Tabs>
      <div className=" container px-4 py-6 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl uppercase ">
          Job by Category Section
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
          A better career is out there. Will help you find it. We are your first
          step to becoming everything you want to be.
        </p>
        <div className="flex items-center justify-center">
          <TabList>
            <Tab>All Jobs</Tab>
            <Tab>On Site Job</Tab>
            <Tab>Remote Job</Tab>
            <Tab>Hybrid Job</Tab>
            <Tab>Part Time Job</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-1 lg:grid-cols-2">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-1 lg:grid-cols-2">
            {jobs
              .filter((j) => j.category === "On Site")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-1 lg:grid-cols-2">
            {jobs
              .filter((j) => j.category === "Remote")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-1 lg:grid-cols-2">
            {jobs
              .filter((j) => j.category === "Hybrid")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-1 lg:grid-cols-2">
            {jobs
              .filter((j) => j.category === "Part Time")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategories;
