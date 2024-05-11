import { Link } from "react-router-dom";

const AllJobs = () => {
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
                  <tr>
                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      Build Dynamic Website
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      10/04/2024
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      10/04/2024
                    </td>

                    <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                      $100-$200
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                      <Link to='/allJobsDetails'>
                        <span className="hover:bg-[#ffb607] transition-all cursor-pointer bg-[#186fc9] text-white px-6 py-1">
                          Details
                        </span>
                      </Link>
                    </td>
                  </tr>
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
