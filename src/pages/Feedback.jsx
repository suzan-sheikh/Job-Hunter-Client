
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import Loader from "./Loader";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Feedback = () => {

  const { user, loading } = useAuth();
  const queryClient = useQueryClient();

  // useTenStackQuery
  const { mutateAsync } = useMutation({
    mutationFn: async ({feedbackData }) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/feedback`,
        feedbackData
      );
      return data;
    },
    onSuccess: () => {
      toast.success("Your Feedback Success send");
      reset()
      queryClient.invalidateQueries({ queryKey: ["allJobs"] });
    },
  });

  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  const onSubmit = async (data) => {
    const { email, name, message } = data;

    const feedbackData = {
      email,
      name,
      message
    };
    try {
      await mutateAsync({ feedbackData });
    } catch (err) {
      toast.error("Message sent Failed");
    }
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="container mx-auto flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className="p-2 mx-auto rounded-md shadow-sm justify-center text-left gap-6 container w-full border-2">
        <form
          data-aos="fade-left"
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-2xl p-2 rounded-lg"
        >
          <h2 className="text-2xl font-black uppercase text-center ">
            Feedback
          </h2>

          <div className="grid grid-cols-1 gap-2 mt-2">
            <div>
              <label className="text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="block w-full px-2 py-1 mt-1 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                {...register("name", { required: true })}
              />              
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                defaultValue={user?.email}
                className="block w-full px-4 py-1 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                {...register("email", { required: true })}
              />
            </div>
        </div>
          <div className="flex flex-col gap-2 mt-2">
            <label className="text-gray-700 " htmlFor="message">
              Message
            </label>
            <textarea
              className="block w-full px-2 py-1 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="message"
              id="message"
              {...register("message")}
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">            
            <button className="w-full px-2 py-2 leading-5 text-white rounded-md transition-colors duration-300 transform bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500focus:outline-none focus:bg-gray-600">
              Submit Feedback
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Feedback;
