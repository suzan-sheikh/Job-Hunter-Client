import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import Loader from "./Loader";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const UpdateMyJobs = () => {

  const {mutateAsync} = useMutation({
    mutationFn: async({jobData}) => {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/job/${job._id}`,
        jobData);
        return data
    },
    onSuccess: () => {
      toast.success("Update Job Successful");
      navigate('/myJobs')
    }
  })

  const job = useLoaderData()

  const [postDate, setPostDate] = useState(new Date(job.postDate) || new Date());
  const [dedLine, setDedLine] = useState(new Date(job.dedLine) || new Date());



  const navigate = useNavigate();

  const { user, loading } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { job_title, min, max, category, photoURL, description } = data;

    const min_salary = parseFloat(min);
    const max_salary = parseFloat(max);

    const email = user?.email;
    const name = user?.displayName;

    const jobData = {
      photoURL,
      job_title,
      category,
      max_salary,
      min_salary,
      description,
      dedLine,
      postDate,
      buyer : {
        email,
        name
      }
    };

    try {
      await mutateAsync({jobData})
    } catch (err) {
      toast.error("Update Job Failed");
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container px-4 mx-auto flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className="flex flex-col md:flex-row p-2 md:p-6 mx-auto rounded-md shadow-md justify-center items-center gap-6 container px-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-2xl p-4 rounded-lg"
        >
          <h2 className="text-lg font-semibold text-gray-700 uppercase text-center ">
            Add a Job
          </h2>

          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-4">
            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Job Title
              </label>
              <input
                id="job_title"
                name="job_title"
                type="text"
                defaultValue={job.job_title}
                className="block w-full px-4 py-1 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                {...register("job_title", { required: true })}
              />
              {errors.job_title && (
                <span className="text-primary">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"                
                disabled
                defaultValue={user?.email}
                className="block w-full px-4 py-1 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Posting Date</label>
              <DatePicker
                className="border p-1 rounded-md"
                selected={postDate}
                onChange={(date) => setPostDate(date)}
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label>

              <DatePicker
                className="border p-1 rounded-md"
                selected={dedLine}
                onChange={(date) => setDedLine(date)}
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="min_price">
                Minimum Salary
              </label>
              <input
                id="min"
                name="min_salary"
                defaultValue={job.min_salary}
                type="number"
                className="block w-full px-4 py-1 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                {...register("min", { required: true })}
              />
              {errors.min && (
                <span className="text-primary">This field is required</span>
              )}
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="max_price">
                Maximum Salary
              </label>
              <input
                id="max"
                name="max_salary"
                defaultValue={job.max_salary}
                type="number"
                className="block w-full px-4 py-1 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                {...register("max", { required: true })}
              />
              {errors.max_salary && (
                <span className="text-primary">This field is required</span>
              )}
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="category">
                Category
              </label>
              <select
                name="category"
                defaultValue={job.category}
                id="category"
                {...register("category")}
                className="border p-1 rounded-md"
              >
                <option value="On Site">On Site</option>
                <option value="Remote">Remote</option>
                <option value="Part Time">Part Time</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Picture URL
              </label>
              <input
                id="photoURL"
                type="text"
                name="photoURL"
                defaultValue={job.photoURL}
                className="block w-full px-4 py-1 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                {...register("photoURL", { required: true })}
              />
              {errors.photoURL && (
                <span className="text-primary">This field is required</span>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Description
            </label>
            <textarea
              className="block w-full px-4 py-1 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="description"
              id="description"
              defaultValue={job.description}              
              {...register("description")}
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button className="w-full px-8 py-2.5 leading-5 text-white rounded-md transition-colors duration-300 transform bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500focus:outline-none focus:bg-gray-600">
              Update Now
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateMyJobs;
