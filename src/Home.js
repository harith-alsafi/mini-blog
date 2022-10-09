import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // list of blogs storage 
    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // this function runs for every render 
    useEffect(() => {
        // fetch is async so using .then means we await for it 
        fetch("https://mini-blog-db.herokuapp.com/blogs").then(res => {
            return res.json(); // extract response as json
        }).then((data) => {
            setBlogs(data); // set the data 
            console.log(data);
        });
    }, []); // when adding empty dependcy array it only runs once at the begining 

    return ( 
        <div className="home">
        {/* conditional check (so if blogs is null we won't evaluate the template ) */}
        {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>}
        </div>
    );
}
 
export default Home;