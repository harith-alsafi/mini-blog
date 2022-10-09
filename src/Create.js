import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false); // loading functionality 
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleSubmit = (e) => {
        // prevent refreshing when pressing submit 
        e.preventDefault();
        const blog = {title, body, author}; 

        setIsLoading(true);

        // sending post request as json data
        fetch('https://mini-blog-db.herokuapp.com/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then((res)=>{
            if(!res.ok){
                throw Error("Couldn't access the data, please reload and try again");
            }
            setIsLoading(false);
            // history.go(-1); // go back
            history.push('/'); // go to home page 
        })
        .catch((err)=>{
            setError(err.message);
            setIsLoading(false);
        });
    }

    return ( 
        <div className="create">
            <h2> Add new blog </h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />


                <label>Blog author: </label>
                <input 
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />

                <label>Content: </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>

                {/* Show loading */}
                {!isLoading && !error && <button>Add Blog</button>}
                {isLoading && <button>Adding Blog...</button>}
                {error && <p>{error}</p>} 
            </form>
        </div>
    );
}
 
export default Create;