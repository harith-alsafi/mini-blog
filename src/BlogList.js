const BlogList = ({blogs, title, handleDelete}) => {
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {/* we loop through elements */ }
            {/* We use {key} in react so react can keep track of the items */ }
            {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p> Written by: {blog.author}</p>
                <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
            </div>
            ))}
        </div>
    );
}
 
export default BlogList;