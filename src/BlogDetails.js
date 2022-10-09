import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
    // enables us to extract parameters from a route 
    const { id } = useParams();
    const {data: blog , error, isLoading} = useFetch('https://mini-blog-db.herokuapp.com/blogs/'+id);
    const history = useHistory();
    const handleClick = () => {
        fetch("https://mini-blog-db.herokuapp.com/blogs/"+blog.id, {
            method: 'DELETE'
        })
        .then(()=>{
            history.push('/'); // go to home page 
        });
    };

    return (  
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div> {error} </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p> Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>   
    );
}
 
export default BlogDetails;