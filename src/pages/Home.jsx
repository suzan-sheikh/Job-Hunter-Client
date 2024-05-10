import Carousel from "../components/Carousel";
import ExtraSection from "../components/ExtraSection";
import Faq from "../components/Faq";
import TabJobCategory from "../components/TabJobCategory";

const Home = () => {

    return (
        <div>
            <Carousel/>
            <TabJobCategory/>
            <Faq/>
            <ExtraSection/>
        </div>
    );
};

export default Home;