import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const BlogDetails = () => {
    // enables us to extract parameters from a route 
    const { id } = useParams();
    const {data: blog , error, isLoading} = useFetch('https://mini-blog-db.herokuapp.com/blogs/'+id);
    const history = useHistory();
    const [deleteError, setDeleteError] = useState(null);
    
    const handleClick = () => {
        fetch("https://mini-blog-db.herokuapp.com/blogs/"+blog.id, {
            method: 'DELETE'
        })
        .then((res)=>{
            if(!res.ok){
                throw Error("Couldn't access the data, please reload and try again");
            }
            history.push('/mini-blog/'); // go to home page 
        })
        .catch((err) => {
            setDeleteError(err.message);
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
                    {!deleteError && <button onClick={handleClick}>delete</button> }
                    {deleteError && <p>{deleteError}</p>}
                </article>
            )}
        </div>   
    );
}
 
export default BlogDetails;