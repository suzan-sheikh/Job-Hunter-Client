import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import logo from "../../assets/images/logo.png";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import axios from "axios";

const Registration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const { setUser, updateUserProfile, createUser, user, loading } = useAuth();

  useEffect(()=>{
    if(user){
      navigate('/')
    }
  },[navigate, user])


  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, photoURL, email, password } = data;

    try {
      //2. User Registration
      const result = await createUser(email, password);

      await updateUserProfile(name, photoURL);
      // Optimistic UI Update
      setUser({ ...result?.user, photoURL: photoURL, displayName: name });
      toast.success("SignUp Successful");
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        {
          email: result?.user?.email,
        },
        { withCredentials: true }
      );
      
      reset();
      navigate(from, { replace: true });
    } catch (err) {
      toast.error("Register fail");
    }
  };

  if(user && loading) return

  return (
    <div className="flex mx-auto items-center min-h-[calc(100vh-306px)] container px-4">
      <div className="flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-4xl bg-[url(https://c4.wallpaperflare.com/wallpaper/176/79/767/colorful-minimalism-graphic-design-gradient-wallpaper-preview.jpg)] bg-no-repeat bg-cover justify-center">
        <div className="w-full px-6 py-4 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
          </div>

          <p className="mt-2 text-xl text-center text-white ">
            Get Your Free Account Now.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-2">
              <label
                className="block mb-1 text-sm font-medium text-white "
                htmlFor="name"
              >
                Username
              </label>
              <input
                id="name"
                autoComplete="name"
                name="name"
                className="block w-full px-4 py-1 text-gray-500 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="mt-2">
              <label
                className="block mb-2 text-sm font-medium text-white "
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                id="photo"
                autoComplete="photo"
                name="photo"
                className="block w-full px-4 py-1 text-gray-500 border rounded-lg bg-white focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                {...register("photoURL", { required: true })}
              />
              {errors.photoURL && <span>This field is required</span>}
            </div>
            <div className="mt-2">
              <label
                className="block mb-2 text-sm font-medium text-white "
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                id="LoggingEmailAddress"
                autoComplete="email"
                name="email"
                className="block w-full px-4 py-1 text-gray-500 border rounded-lg bg-white focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="mt-2">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-white"
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                id="loggingPassword"
                autoComplete="current-password"
                name="password"
                className="block w-full px-4 py-1 text-gray-500 border rounded-lg bg-white focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                {...register("password", { required: true })}
              />
              {errors.password && <span>This field is required</span>}
            </div>
            <div className="mt-2">
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Register Now
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-1">
            <span className="w-1/5 border-b  md:w-1/4"></span>
            <Link
              to="/login"
              className="text-xs text-white uppercase  hover:underline"
            >
              or Login
            </Link>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
