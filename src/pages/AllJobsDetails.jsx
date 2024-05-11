import { CiHeart } from "react-icons/ci";
import { IoStarHalfSharp } from "react-icons/io5";
import { FcImport } from "react-icons/fc";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2'
import toast from "react-hot-toast";

const AllJobsDetails = () => {
  const job = useLoaderData();

  const { user } = useAuth();
  const email = user?.email;
  const name = user?.displayName;

  const { photoURL, job_title, category, description, buyer } = job || {};

  const handleApply = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'Input email and password',
      html:
        `<input id="swal-input1" class="swal2-input" value="${email || ''}">` +
        `<input id="swal-input2" class="swal2-input" type="text" value="${name || ''}">`+
        `<input id="swal-input3" class="swal2-input" placeholder="Your resume link" type="text">`,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value
        ];
      },
    });
    
    if (formValues) {
      const [email, name, link] = formValues;

      console.log(email, name, link);
      toast.success('Apply successful')




      // Swal.fire(`email: ${email}, Name: ${name}, Resume Link: ${link}`);
    }
  }

  return (
    <div className="container mx-auto">
      <div className="px-4 md:px-48 top-20 ">
        <div className="grid grid-cols-6 gap-2 border-2 rounded-sm text-black">
          <div className="col-span-2 relative overflow-hidden p-5 border-r-2 flex items-center justify-center">
            <span className="absolute transform rotate-[-45deg] bg-[#e12335] text-white px-8 top-2 left-[-34px] text-sm">
              {category}
            </span>
            <div className="w-60">
              <img className="w-full rounded-md" src={photoURL} alt="image" />
            </div>
          </div>
          <div className="col-span-4 p-2 space-y-2">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold text-black">{job_title}</h2>
              <CiHeart className="text-xl text-green-500" />
            </div>
            <p className="text-sm">Posted By: {buyer?.name}</p>

            <div className="divider p-0 m-0"></div>
            <div>
              <p>{description}</p>
            </div>
            <div className="flex gap-4 justify-between">
              <div className="flex items-center">
                <p className="text-sm"> 01 </p>
                <FcImport className="text-xl" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm">Salary range: </span>
                <span className="bg-[#ffb607] text-white px-6 flex items-center w-38 gap-2">
                  <IoStarHalfSharp />$ 1250 To $ 2150
                </span>
              </div>
              <span
                onClick={handleApply}
                className="hover:bg-[#ffb607] transition-all cursor-pointer bg-[#186fc9] text-white px-6 py-1"
              >
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
