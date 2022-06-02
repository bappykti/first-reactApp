// fetching data using custom Hook for different API 

import React, {useState, useEffect} from 'react';

const CustomHook = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw Error("Fetching is unsuccessful")
            }else{
                return res.json();
            }
            
        })
        .then((data)=>{
            setData(data);
            // console.log(todos);
            setIsLoading(false);
            setError(null);
        })
        .catch((error)=>{
            setError(error.message);
            setIsLoading(false);
        });
        }, 3000)
    }, [url]);
    
    return {data, isLoading, error};
}

export default CustomHook;