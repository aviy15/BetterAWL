import {useState , useEffect} from 'react' ;
import axios from 'axios';

const useFetch = (url) =>{
    const [data , setData] = useState(null);
    const [loading , setLoad] = useState(true);
    const [error , setError] = useState(null);
    useEffect(() =>{
        axios.get(url).then(res =>{
            setData(res.data);
            console.log(res.data);
            setLoad(false);
            setError(null);
        });
      } , [url]);
    return {data , loading , error};
}

export default useFetch;