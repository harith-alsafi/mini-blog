import { useState, useEffect } from "react";

// This is a custom hock and it must start with "use"
const useFetch = (url) =>{
    // list of blogs storage 
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // this function runs for every render 
    useEffect(() => {
        // fetch is async so using .then means we await for it 
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error("Couldn't fetch the data");
            }
            return res.json(); // extract response as json
        })
        .then((data) => {
            setData(data); // set the data 
            setIsLoading(false);
            setError(null);
        })
        .catch(err => { // catching any network error 
            setError(err.message);
            setIsLoading(false);
        });
    }, [url]); // when adding empty dependcy array it only runs once at the begining 

    return {data, isLoading, error};
}

export default useFetch;