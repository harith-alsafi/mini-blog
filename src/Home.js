import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // list of blogs storage 
    const [blogs, setBlogs] = useState([
        {id: 0, title: "Blog 1" , author: "Harith", body: "This is blog 1"},
        {id: 1, title: "Blog 2" , author: "Harith", body: "This is blog 2"},
        {id: 2, title: "Blog 3" , author: "Harith", body: "This is blog 3"}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // this function runs for every render 
    useEffect(() => {

    }, []); // when adding empty dependcy array it only runs once at the begining 

    return ( 
        <div className="home">
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
        </div>
    );
}
 
export default Home;