import { Link } from "react-router-dom";

const BlogList = ({blogs, title, handleDelete}) => {
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {/* we loop through elements */ }
            {/* We use {key} in react so react can keep track of the items */ }
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <Link to={`/mini-blog/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p> Written by: {blog.author}</p>
                </Link>
            </div>
            ))}
        </div>
    );
}
 
export default BlogList;