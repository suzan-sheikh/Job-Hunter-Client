import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const YourComponent = () => {
  const [searchText, setSearchText] = useState("");

  const { data: jobs = [], isLoading, refetch } = useQuery({
    queryKey: ["jobs", searchText],
    queryFn: async () => {
      try {
        const url = searchText.trim() === "" ? `${import.meta.env.VITE_API_URL}/jobsSearch` : `${import.meta.env.VITE_API_URL}/jobsSearch?search=${searchText}`;
        const { data } = await axios.get(url);
        return data;
      } catch (error) {
        console.error("Error fetching jobs:", error);
        throw new Error("Error fetching jobs");
      }
    },
  });

  const handleSearch = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search jobs"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <button type="submit">Search</button>
      </form>
      {isLoading ? <p>Loading...</p> : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>{job.job_title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default YourComponent;




// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const YourComponent = () => {
//   const [searchText, setSearchText] = useState("");

//   const queryFn = async () => {
//     try {
//       if (searchText.trim() === "") {
//         // If search text is empty, fetch all jobs
//         const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobsSearch`);
//         return data;
//       } else {
//         // If search text is not empty, fetch jobs based on search text
//         const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobsSearch?search=${searchText}`);
//         return data;
//       }
//     } catch (error) {
//       console.error("Error fetching jobs:", error);
//       throw new Error("Error fetching jobs");
//     }
//   };

//   const { data: jobs = [], isLoading, refetch } = useQuery({
//     queryKey: ["jobs", searchText],
//     queryFn: queryFn
//   });

//   const handleSearch = (e) => {
//     e.preventDefault();
//     refetch();
//   };

//   return (
//     <div>
//       {/* Your UI components here */}
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Search jobs"
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//         />
//         <button type="submit">Search</button>
//       </form>
//       <div>
//         {/* Render jobs data */}
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : (
//           <ul>
//             {jobs.map((job) => (
//               <li key={job.id}>{job.job_title}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default YourComponent;


// import { useState, useEffect } from "react";
// import axios from "axios";

// const YourComponent = () => {
//   const [jobs, setJobs] = useState([]);
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     // Function to fetch all jobs initially
//     const fetchAllJobs = async () => {
//       try {
//         const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobsSearch`);
//         setJobs(data);
//       } catch (error) {
//         console.error("Error fetching all jobs:", error);
//         // Handle error if necessary
//       }
//     };

//     fetchAllJobs(); // Call the function to fetch all jobs when component mounts
//   }, []); // Empty dependency array ensures this effect runs only once when component mounts

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     try {
//       if (searchText.trim() === "") {
//         // If search text is empty, fetch all jobs again
//         const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobsSearch`);
//         setJobs(data);
//       } else {
//         // If search text is not empty, fetch jobs based on search text
//         const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/jobsSearch?search=${searchText}`);
//         setJobs(data);
//       }
//     } catch (error) {
//       console.error("Error fetching jobs:", error);
//       // Handle error if necessary
//     }
//   };

//   return (
//     <div>
//       {/* Your UI components here */}
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Search jobs"
//           onChange={(e) => setSearchText(e.target.value)}
//           value={searchText}
//         />
//         <button type="submit">Search</button>
//       </form>
//       <div>
//         {/* Render jobs data */}
//         <ul>
//           {jobs.map((job) => (
//             <li key={job.id}>{job.job_title}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default YourComponent;

