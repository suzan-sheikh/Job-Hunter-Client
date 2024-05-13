import useAuth from "../hooks/useAuth"
import AppliedJobCard from "../components/AppliedJobCard"
import { useEffect, useState } from "react";
import axios from "axios";

const AppliedJobs = () => {


  const { user } = useAuth();
  console.log(user?.email);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `${import.meta.env.VITE_API_URL}/applyJob/${user?.email}`, {withCredentials: true}
      );
      setJobs(data);
    };
    getData();
  }, [user]);



  return (
    <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
      <div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
          <div>
            <select
              name='category'
              id='category'
              className='border p-2 rounded-lg'
            >
              <option value=''>Filter By Category</option>
              <option value='Web Development'>On Site Job</option>
              <option value='Graphics Design'>Remote Job</option>
              <option value='Digital Marketing'>Part Time Job</option>
            </select>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-1 lg:grid-cols-2'>
          {jobs.map(job => <AppliedJobCard key={job._id} job={job}/>)}
        </div>
      </div>
    </div>
  )
}

export default AppliedJobs
