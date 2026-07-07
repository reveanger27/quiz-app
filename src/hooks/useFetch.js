import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        if(!url) return;

        setLoading(true);
        setError(null);
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results);
        } catch (err) {
            setError("Terjadi kesalahan, cek koneksi internet anda!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { 
        data, 
        loading, 
        error, 
        fetchData 
    };
    
}

export default useFetch;