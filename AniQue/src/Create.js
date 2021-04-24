
import { useState } from "react";

import List from "./List";

const Create = () => {
    const [task , setTask] = useState('');
    const [data , setData] = useState(null);

    
    const handleSearch = async (e) =>{
        e.preventDefault();
        const list = await fetch(`https://api.jikan.moe/v3/search/anime?q=${task}&order_by=title&sort=asc&limit=10`).then(res => res.json());
        setData(list.results);
        console.log(list);
    }
    return ( 
        <main>
        <div className = "create">
            <h2>Add an anime to your watchlist!</h2>
            <form onSubmit = {handleSearch}>
                <label>Search : </label>
                <input type = "text" required value={task} onChange = {(e) => setTask(e.target.value)} />
                <button onClick = {handleSearch}>Submit</button>
            </form>
            </div>
            {data && <List data={data} isInSearch={true} />}
        </main>
     );
}
 
export default Create;