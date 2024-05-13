import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AllJobs = () => {
  const [itemPerPage, setItemPerPage] = useState(5);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobs, setJobs] = useState([]);

  // pagination

  const numberOfPages = Math.ceil(count / itemPerPage);

  const pages = [...Array(Math.ceil(numberOfPages)).keys()].map(
    (element) => element + 1
  );
  const { refetch } = useQuery({
    queryFn: async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobsCount`);
      setCount(data.count);
      refetch();
      return data;
    },
    queryKey: ["count"],
  });
  // handle pagination button
  const handlePaginationButton = (value) => {
    setCurrentPage(value);
  };
  console.log(currentPage, itemPerPage);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/allJobs?page=${currentPage}&size=${itemPerPage}`
      );
      setJobs(data);
    };
    getData();
  }, [currentPage, itemPerPage]);

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

            <button className="px-1 md:px-4 py-1 text-sm font-medium tracking-wider hover:bg-emerald-500 bg-blue-500 text-white transition-all">
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
                  {jobs.map((job) => (
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
                        <span>
                          {" "}
                          $ {job.max_salary} to $ {job.min_salary}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <Link to={`/job/${job._id}`}>
                          <span
                            className={`px-6 py-1 ${
                              job.category === "On Site" &&
                              "text-blue-500 bg-blue-100/80 hover:bg-blue-500 hover:text-white transition-all"
                            } ${
                              job.category === "Remote" &&
                              "text-emerald-500 bg-emerald-100/80 hover:bg-emerald-500 hover:text-white transition-all"
                            } ${
                              job.category === "Part Time" &&
                              "text-pink-500 bg-pink-100/80 hover:bg-pink-500 hover:text-white transition-all"
                            }
                            ${
                              job.category === "Hybrid" &&
                              "bg-red-100/80 hover:bg-red-500 text-red-500 hover:text-white transition-all"
                            }`}
                          >
                            Details
                          </span>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-center m-12">
                <button
                  disabled={currentPage == 1}
                  onClick={() => handlePaginationButton(currentPage - 1)}
                  className="px-4 py-2 mx-1 text-white disabled:text-gray-500 capitalize bg-green-500 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
                >
                  <div className="flex items-center -mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-1 rtl:-scale-x-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                      />
                    </svg>

                    <span className="mx-1">previous</span>
                  </div>
                </button>

                {pages.map((btnNum) => (
                  <button
                    onClick={() => handlePaginationButton(btnNum)}
                    key={btnNum}
                    className={`hidden ${
                      currentPage === btnNum ? "bg-blue-500 text-white" : ""
                    } px-4 py-2 mx-1 transition-colors duration-300 transform rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
                  >
                    {btnNum}
                  </button>
                ))}

                <button
                  disabled={currentPage == numberOfPages}
                  onClick={() => handlePaginationButton(currentPage + 1)}
                  className="px-4 py-2 mx-1 text-white transition-colors duration-300 transform bg-green-500 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
                >
                  <div className="flex items-center -mx-1">
                    <span className="mx-1">Next</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 mx-1 rtl:-scale-x-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllJobs;
