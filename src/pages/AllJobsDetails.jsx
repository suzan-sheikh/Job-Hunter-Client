import { CiHeart } from "react-icons/ci";
import { IoStarHalfSharp } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import { FcImport } from "react-icons/fc";

const AllJobsDetails = () => {
  return (
    <div className="container mx-auto">
      <div className="px-4 md:px-48 top-20 ">
        <div className="grid grid-cols-6 gap-2 border-2 rounded-sm text-black">
          <div className="col-span-2 relative overflow-hidden p-5 border-r-2 flex items-center justify-center">
            <span className="absolute transform rotate-[-45deg] bg-[#e12335] text-white px-8 top-2 left-[-34px] text-sm">
              category
            </span>
            <div className="w-36">
              <img
                className="w-full"
                src="https://careerfy.net/demo/wp-content/uploads/employer-18-210x204.png"
                alt="image"
              />
            </div>
          </div>
          <div className="col-span-4 p-2 space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-black">title</h2>
              <CiHeart className="text-xl text-green-500" />
            </div>
            <p className="text-sm">Md suzan Sheikh</p>

            <span className="bg-[#ffb607] text-white px-6 pb-1 flex items-center w-28 gap-2">
              <IoStarHalfSharp />
              urgent
            </span>
            <div className="flex items-center gap-4 ">
              <p className="text-sm">Post On: post_date</p>
              <div className="flex items-center">
                <CiTimer className="text-md text-green-500 mr-1"  />
                <p className="text-sm">deadline</p>
              </div>
            </div>
            <div className="divider p-0 m-0"></div>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi reprehenderit laborum velit adipisci, vel excepturi, commodi doloribus accusamus maxime saepe corporis autem esse.</p>
            </div>
            <div className="flex gap-4 justify-between">
              <div className="flex items-center">
                <p className="text-sm"> 01 </p>
                <FcImport className="text-xl" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Salary range: </span>
                <p className="text-sm"> 1250 - 2150</p>
              </div>
              <span className="hover:bg-[#ffb607] transition-all cursor-pointer bg-[#186fc9] text-white px-6 py-1">
                Apply Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobsDetails;
