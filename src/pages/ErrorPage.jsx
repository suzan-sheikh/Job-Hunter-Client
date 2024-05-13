import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <section className="flex items-center h-screen p-16 bg-gray-50 text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="w-[450px]">
            <img
              className="w-full"
              src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
              alt=""
            />
          </div>
          <div className="max-w-md text-center">
            <h2 className="mb-1 font-extrabold text-6xl">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="mt-4 mb-8 text-gray-600">
              you can switch our Homepage.
            </p>
            <NavLink
              to="/"
              rel="noopener noreferrer"
              href="#"
              className="bg-green-500 hover:bg-yellow-500 text-white transition-all px-4 py-2 rounded-sm"
            >
              GO BACK HOME
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
