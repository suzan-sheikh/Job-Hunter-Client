const ExtraSection = () => {
  return (
    <div>
      <div className="container px-4 mx-auto">
        <div className="divider p-0 m-0"></div>
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between my-20">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-md md:text-2xl font-black">
              MILLIONS OF JOBS. <br /> FIND THE ONE THAT’S RIGHT FOR YOU.
            </h2>
            <p className="text-sm md:text-xl">
              Search all the open positions on the web. Get your own
              personalized salary estimate. Read reviews on over 600,000
              companies worldwide. The right job is out there.
            </p>
            <div>
              <button className="bg-[#13B5EA] text-white px-10 py-1">
                Details
              </button>
            </div>
          </div>
          <div>
            <img
              src="https://careerfy.net/demo/wp-content/uploads/multiple-logos.jpg"
              alt="banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
