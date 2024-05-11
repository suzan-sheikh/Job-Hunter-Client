import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex w-full justify-center items-center mt-40">
      <ScaleLoader size={100} color="#F92FD3" />
    </div>
  );
};

export default Loader;
