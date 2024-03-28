import Banner from "../components/Banner";
import Blogs from "../components/Blogs";

const Home = () => {
    return (
        <div className="m-8">
            <Banner></Banner>
            <div className="text-center text-4xl font-bold mt-14">Books</div>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;