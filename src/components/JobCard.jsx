import { CiHeart } from "react-icons/ci";
import { IoStarHalfSharp } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import { FcImport } from "react-icons/fc";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const JobCard = ({ job }) => {
  const { user } = useAuth();

  const handleDetailsClick = () => {
    if (!user) {
      toast.error("You have to log in first to view details");
    }
  };
  const {
    _id,
    photoURL,
    job_title,
    category,
    max_salary,
    min_salary,
    dedLine,
    postDate,
    buyer,
    job_applicant_number,
  } = job || {};

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
      }}
      className="grid md:grid-cols-5 gap-2 border-2 rounded-sm"
    >
      <div className="relative overflow-hidden p-2 md:border-r-2 flex items-center">
        <span className="absolute transform rotate-[-45deg] bg-[#e12335] text-white px-8 top-2 left-[-34px] text-sm">
          {category}
        </span>
        <div className="w-full">
          <img className="w-full rounded-md" src={photoURL} alt="image" />
        </div>
      </div>
      <div className="md:col-span-4 p-2 space-y-2">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">{job_title}</h2>
          <CiHeart className="text-xl text-green-500" />
        </div>
        <p className="text-sm">{buyer?.name}</p>

        <span
          className={`cursor-pointer px-6 text-sm py-1 flex items-center justify-center ${
            category === "On Site" &&
            "text-blue-500 bg-blue-100/80 hover:bg-blue-500 hover:text-white transition-all"
          } ${
            category === "Remote" &&
            "text-emerald-500 bg-emerald-100/80 hover:bg-emerald-500 hover:text-white transition-all"
          } ${
            category === "Part Time" &&
            "text-pink-500 bg-pink-100/80 hover:bg-pink-500 hover:text-white transition-all"
          }${
            category === "Hybrid" &&
            " bg-red-100/80 hover:bg-red-500 text-red-500 hover:text-white transition-all"
          }`}
        >
          <IoStarHalfSharp />
          {category}
        </span>
        <div className="flex items-center gap-4 ">
          <p className="text-sm">
            Post On: {new Date(postDate).toLocaleDateString()}
          </p>
          <div className="flex items-center">
            <CiTimer className="text-md text-green-500 mr-3" />
            <p className="text-sm">{new Date(dedLine).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="divider p-0 m-0"></div>
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          <div className="flex items-center">
            <p className="text-sm"> {job_applicant_number}</p>
            <FcImport className="text-xl" />
            <p className="text-sm">Apply Num</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Salary range: </span>
            <p className="text-sm">
              {" "}
              $ {max_salary} to $ {min_salary}{" "}
            </p>
          </div>

          <Link to={`/job/${_id}`} onClick={handleDetailsClick}>
            <span
              className={`cursor-pointer px-6 py-1 ${
                category === "On Site" &&
                "hover:bg-emerald-500 bg-blue-500 text-white transition-all"
              } ${
                category === "Remote" &&
                " hover:bg-pink-500 bg-emerald-500 text-white transition-all"
              } ${
                category === "Part Time" &&
                "hover:bg-yellow-500 bg-pink-500 text-white transition-all"
              }${
                category === "Hybrid" &&
                "hover:bg-red-500 bg-red-500 text-white transition-all"
              }`}
            >
              Details
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

JobCard.propTypes = {
  job: PropTypes.object.isRequired,
};

export default JobCard;
