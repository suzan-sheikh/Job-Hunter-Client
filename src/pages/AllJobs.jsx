import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllJobs = () => {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const getData = async () => {
      const {data} = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
      setJobs(data)
    }
    getData()
  },[])

  return (
    <section className="container px-4 mx-auto pt-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <form>
          <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-4 py-1 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter Job Title"
              aria-label="Enter Job Title"
            />

            <button className="px-1 md:px-2 py-1 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
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
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      <span>Posting Date</span>
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
                        <span> Salary Range</span>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                    >
                      Remarks
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                {jobs.map(job => (
                  <tr key={job._id}>
                  <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                    {job.job_title}
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                   {new Date(job.postDate).toLocaleDateString()}
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                  {new Date(job.dedLine).toLocaleDateString()} 
                  </td>

                  <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                   <span> $ {job.max_salary} to $ {job.min_salary}</span>
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <Link to={`/job/${job._id}`}> 
                      <span className={`px-6 py-1 ${
                              job.category === 'On Site' &&
                              'text-blue-500 bg-blue-100/80 hover:bg-blue-500 hover:text-white transition-all'
                            } ${
                              job.category === 'Remote' &&
                              'text-emerald-500 bg-emerald-100/80 hover:bg-emerald-500 hover:text-white transition-all'
                            } ${
                              job.category === 'Part Time' &&
                              'text-pink-500 bg-pink-100/80 hover:bg-pink-500 hover:text-white transition-all'
                            }
                            ${
                              job.category === 'Hybrid' &&
                              'bg-red-100/80 hover:bg-red-500 text-red-500 hover:text-white transition-all'
                            }`}>
                        Details
                      </span>
                    </Link>
                  </td>
                </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllJobs;


