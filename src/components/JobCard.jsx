import { CiHeart } from "react-icons/ci";
import { IoStarHalfSharp } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import { FcImport } from "react-icons/fc";

const JobCard = ({job}) => {
  const {title, category, post_date, deadline, salary_range, applicants_number} = job || {}
  return (
    <div className="grid md:grid-cols-5 gap-2 border-2 rounded-sm text-black">
      <div className="relative overflow-hidden p-5 border-r-2">
        <span className="absolute transform rotate-[-45deg] bg-[#e12335] text-white px-8 top-2 left-[-34px] text-sm">
          {category}
        </span>
        <div className="w-full">
          <img className="w-full"
            src="https://careerfy.net/demo/wp-content/uploads/employer-18-210x204.png"
            alt="image"
          />
        </div>
      </div>
      <div className="col-span-4 p-2 space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-black">
            {title}
          </h2>
          <CiHeart className="text-xl text-green-500" />
        </div>
        <p className="text-sm">Md suzan Sheikh</p>

        <span className="bg-[#ffb607] text-white px-6 pb-1 flex items-center w-28 gap-2">
          <IoStarHalfSharp />
          urgent
        </span>
        <div className="flex items-center gap-4 ">
          <p className="text-sm">Post On: {post_date}</p>
          <div className="flex items-center">
            <CiTimer className="text-md text-green-500" />
            <p className="text-sm">{deadline}</p>
          </div>
        </div>
        <div className="divider p-0 m-0"></div>
        <div className="flex gap-4 justify-between">
          <div className="flex items-center">
            <p> {applicants_number} </p>
            <FcImport className="text-xl" />
          </div>
          <div className="flex items-center gap-2">
            <span>Salary range:  </span>
            <p> {salary_range}</p>
          </div>
          <div>
            <span className="cursor-pointer bg-[#186fc9] text-white px-6 py-1">
              Details
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
