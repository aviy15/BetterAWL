import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Details = () => {
  const  id  = useParams();
  console.log(id);
  const {data , loading , error} = useFetch('http://localhost:4000/api/anime/' + id.animeid);
  let history = useHistory();
  console.log(data);
  const handleClick = () =>{
    axios({
        method: 'delete',
        url: 'http://localhost:4000/api/anime/' + id.animeid,
    }).then(() => {
        history.push('/');
    });
  }
  const handleClickCompleted = () =>{
    axios({
        method: 'put',
        url: 'http://localhost:4000/api/anime/' + id.animeid,
    }).then(() => {
        history.push('/');
    });
  }
  return (
    <div className="details">
        {error && <div>{error}</div>}
        {(!error) && loading && <div>Loading....</div> }
        {data && (<article>
            <img src={data.imgurl} alt="could not load"/>
            <h2>Title : {data.title}</h2>
            <h4>Score : {data.score}</h4>
            <div>Number of episodes : {data.episodes}</div>
            <div>{data.description}</div>
            <a href={data.malurl}>Check out this anime on MyAnimeList</a>
        </article>) }
        {data && (!data.completed) && <button onClick = {handleClickCompleted} className = "blue-button">Mark as completed</button>}
        <div><button onClick = {handleClick} className = "red-button">Delete from watchlist</button></div>
        
    </div>
  );
}
 
export default Details;