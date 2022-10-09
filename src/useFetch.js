import { useState, useEffect } from "react";

// This is a custom hock and it must start with "use"
const useFetch = (url) =>{
    // list of blogs storage 
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // this function runs for every render 
    useEffect(() => {
        const abortCont = new AbortController();

        // fetch is async so using .then means we await for it 
        fetch(url, {signal: abortCont.signal})
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
            if(err.name !== 'AbortError'){
                setError(err.message);
                setIsLoading(false);
            }
        });
        // we need to add a cleanup return function 
        // so when we switch pages it stops the fetch 
        return () => abortCont.abort();
    }, [url]); // when adding empty dependcy array it only runs once at the begining 

    return {data, isLoading, error};
}

export default useFetch;