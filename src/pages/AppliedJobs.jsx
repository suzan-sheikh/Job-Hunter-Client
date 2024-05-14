import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Helmet } from "react-helmet";
import { IoMdDownload } from "react-icons/io";
import MyDocument from "../components/MyDocument";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const AppliedJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('');
  const websiteName = "JHunter";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/applyJob/${encodeURIComponent(user?.email)}?filter=${encodeURIComponent(filter)}`, {
          withCredentials: true
        });
        setJobs(response.data) 

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [filter, user]);

  console.log(jobs);

  return (
    <div
      data-aos="zoom-in"
      className="container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>{websiteName} | Applied Jobs</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
          <div>
            <select
              onChange={e=>setFilter(e.target.value)}
              value={filter}
              name="category"
              id="category"
              className="border p-2 rounded-lg"
            >
              <option value="">Filter By Category</option>
              <option value="On Site">On Site Job</option>
              <option value="Remote">Remote Job</option>
              <option value="Part Time">Part Time Job</option>
              <option value="Hybrid">Hybrid Job</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4">
          <PDFDownloadLink
            document={<MyDocument jobs={jobs} />}
            fileName="example.pdf"
          >
            {({ loading }) => (
              <button className="flex items-center gap-2 bg-lime-500 hover:bg-pink-500 text-white transition-all px-3 py-1">
                {loading ? "Loading document..." : "Download Summary"} <IoMdDownload />{" "}
              </button>
            )}
          </PDFDownloadLink>
        </div>

        <div>
          <div className="flex items-center gap-x-3">
            <h2 className="text-lg font-medium text-gray-800 ">
              My Posted Jobs
            </h2>

            <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
              {jobs.length} Jobs
            </span>
          </div>

          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <div className="flex items-center gap-x-3">
                            <span></span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>Title</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <span>Deadline</span>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <button className="flex items-center gap-x-2">
                            <span>Price Range</span>
                          </button>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          Description
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-white divide-y divide-gray-200 ">
                      {jobs.map((job) => (
                        <tr key={job._id}>
                          <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                            <div className="inline-flex items-center gap-x-3">
                              <div className="flex items-center gap-x-2">
                                <img
                                  className="object-cover w-14 h-10 rounded-md"
                                  src={job.photoURL}
                                  alt=""
                                />
                              </div>
                            </div>
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {job.job_title}
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {new Date(job.dedLine).toLocaleDateString()}
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            $ {job.max_salary} - $ {job.min_salary}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              <p
                                className={`cursor-pointer px-6 text-sm py-1 flex items-center justify-center ${
                                  job.category === "On Site" &&
                                  "text-blue-500 bg-blue-100/80 hover:bg-blue-500 hover:text-white transition-all"
                                } ${
                                  job.category === "Remote" &&
                                  "text-emerald-500 bg-emerald-100/80 hover:bg-emerald-500 hover:text-white transition-all"
                                } ${
                                  job.category === "Part Time" &&
                                  "text-pink-500 bg-pink-100/80 hover:bg-pink-500 hover:text-white transition-all"
                                }${
                                  job.category === "Hybrid" &&
                                  " bg-red-100/80 hover:bg-red-500 text-red-500 hover:text-white transition-all"
                                }`}
                              >
                                {job.category}
                              </p>
                            </div>
                          </td>
                          <td
                            title={job.description}
                            className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap"
                          >
                            {job.description.substring(0, 70)}....
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
