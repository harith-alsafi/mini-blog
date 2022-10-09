import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch("https://mini-blog-db.herokuapp.com/blogs");

    return ( 
        <div className="home">
        {/* Check errors */}
        {error && <div>{error}</div>}
        {/* Loading the info */}
        {isLoading && <div>Loading</div>}
        {/* conditional check (so if blogs is null we won't evaluate the template ) */}
        {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}
 
export default Home;