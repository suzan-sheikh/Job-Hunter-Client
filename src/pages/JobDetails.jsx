import { CiHeart } from "react-icons/ci";
import { IoStarHalfSharp } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import { FcImport } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {

  const job = useLoaderData()

  const {
    photoURL,
    job_title,
    category,
    max_salary,
    min_salary,
    dedLine,
    postDate,
    buyer,
  } = job || {};

  // user Email  

  return (
    <div className="container mx-auto">
      <div className="px-4 md:px-48 top-20 ">
        <div className="grid grid-cols-6 gap-2 border-2 rounded-sm text-black">
          <div className="col-span-2 relative overflow-hidden p-5 border-r-2 flex items-center justify-center">
            <span className="absolute transform rotate-[-45deg] bg-[#e12335] text-white px-8 top-2 left-[-34px] text-sm">
              {category}
            </span>
            <div className="w-64">
              <img
                className="w-full rounded-md"
                src={photoURL}
                alt="image"
              />
            </div>
          </div>
          <div className="col-span-4 p-2 space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-black">{job_title}</h2>
              <CiHeart className="text-xl text-green-500" />
            </div>
            <p className="text-sm">{buyer?.email}</p>

            <span className="bg-[#ffb607] text-white px-6 pb-1 flex items-center w-28 gap-2">
              <IoStarHalfSharp />
              urgent
            </span>
            <div className="flex items-center gap-4 ">
              <p className="text-sm">Post On: {new Date(postDate).toLocaleDateString()}</p>
              <div className="flex items-center">
                <CiTimer className="text-md text-green-500 mr-3" />
                <p className="text-sm">{new Date(dedLine).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="divider p-0 m-0"></div>
            <div className="flex gap-4 justify-between">
              <div className="flex items-center">
                <p className="text-sm"> sta-1 </p>
                <FcImport className="text-xl" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Salary range: </span>
                <p className="text-sm"> $ {min_salary} to $ {max_salary}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
