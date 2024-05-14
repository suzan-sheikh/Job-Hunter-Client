/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../pages/Loader";
import { motion } from "framer-motion";

const TabCategories = () => {
  const { data: jobs = [], isLoading } = useQuery({
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
      return data;
    },
    queryKey: ["allJobs"],
  });

  // const getData = async () => {
  //   const {data} = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
  //   return data
  // }

  if (isLoading) return <Loader />;

  return (
    <Tabs data-aos="fade-up">
      <div className=" container px-4 py-6 mx-auto">
        <div data-aos="flip-up">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl uppercase ">
            Job by Category Section
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
            A better career is out there. Will help you find it. We are your
            first step to becoming everything you want to be.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-2 mb-4">
            <form>
              <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                <input
                  className="px-4 py-1 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                  type="text"
                  name="search"
                  placeholder="Enter Job Title"
                  aria-label="Enter Job Title"
                />

                <button className="px-1 md:px-4 py-1 text-sm font-medium tracking-wider hover:bg-emerald-500 bg-blue-500 text-white transition-all">
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="flex items-center justify-center">
            <TabList>
              <Tab>All Jobs</Tab>
              <Tab>On Site Job</Tab>
              <Tab>Remote Job</Tab>
              <Tab>Hybrid Job</Tab>
              <Tab>Part Time Job</Tab>
            </TabList>
          </div>
        </div>

        <TabPanel>
          <motion.section
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.5,
                },
              },
            }}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-1 lg:grid-cols-2"
          >
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </motion.section>
        </TabPanel>

        <TabPanel>
          <motion.section
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.5,
                },
              },
            }}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-1 lg:grid-cols-2"
          >
            {jobs
              .filter((j) => j.category === "On Site")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </motion.section>
        </TabPanel>

        <TabPanel>
          <motion.section
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.5,
                },
              },
            }}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-1 lg:grid-cols-2"
          >
            {jobs
              .filter((j) => j.category === "Remote")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </motion.section>
        </TabPanel>

        <TabPanel>
          <motion.section
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.5,
                },
              },
            }}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-1 lg:grid-cols-2"
          >
            {jobs
              .filter((j) => j.category === "Hybrid")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </motion.section>
        </TabPanel>

        <TabPanel>
          <motion.section
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.5,
                },
              },
            }}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-1 lg:grid-cols-2"
          >
            {jobs
              .filter((j) => j.category === "Part Time")
              .map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </motion.section>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCategories;
