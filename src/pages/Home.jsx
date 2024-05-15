import { Helmet } from "react-helmet";
import Carousel from "../components/Carousel";
import ExtraSection from "../components/ExtraSection";
import Faq from "../components/Faq";
import TabJobCategory from "../components/TabJobCategory";
import YourComponent from "./YourComponent";

const Home = () => {
  const websiteName = "JHunter";

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{websiteName} | Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Carousel />
      <TabJobCategory />
      <Faq />
      <ExtraSection />    
      <YourComponent/>  
    </div>
  );
};

export default Home;
