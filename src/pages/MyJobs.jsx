import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Loader from "./Loader";
import { Helmet } from "react-helmet";

const MyJobs = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()
  const queryClient = useQueryClient()



  const {data: jobs = [], isLoading} = useQuery({
    queryFn: async () => {
      const {data} = await axiosSecure(`/jobs/${user?.email}`);
      return data      
    },
    queryKey: ['myJobs'] 
  })

  const {mutateAsync} = useMutation({
    mutationFn: async ({id}) => {
      const {data} = await axiosSecure.delete(`/job/${id}`)
      return data
    },
    onSuccess: () => {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      queryClient.invalidateQueries({queryKey: ['myJobs']})
      
    }
  })
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then( async (result) => {
      if (result.isConfirmed) {
        await mutateAsync({id})  
      }
    });
  };

  if(isLoading) return <Loader/>
  
  const websiteName =  'Freelancer';

  return (
    <section className="container px-4 mx-auto pt-12">

      <Helmet>
        <meta charSet="utf-8" />
        <title>{websiteName} | My Jobs</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="flex items-center gap-x-3">
        <h2 className="text-lg font-medium text-gray-800 ">My Posted Jobs</h2>

        <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
          05 Jobs
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

                    <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                      Edit
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
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button onClick={() => handleDelete(job._id)} className="bg-red-500 hover:bg-yellow-500 text-white transition-all px-3 py-1 rounded-md">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </button>

                          <Link to={`/update/${job._id}`}>
                          <button className="bg-pink-500 hover:bg-yellow-500 text-white transition-all px-3 py-1 rounded-md">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="w-5 h-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                          </button>
                          </Link>
                        </div>
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

export default MyJobs;
