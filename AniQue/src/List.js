import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const List = ({data , isInSearch}) => {
    const history = useHistory();
    const handleClick = async (anime) =>{
        await axios({
            method: 'post',
            url: 'http://localhost:4000/api/anime/',
            data: {
              title : anime.title,
              description : anime.synopsis,
              imgurl : anime.image_url,
              score : anime.score,
              malurl : anime.url,
              episodes : anime.episodes,
              completed : false
            }
        }).then(() => {
            history.push('/');
        }).catch(e => console.log(e));
    }
    return ( 
        <div className = "list">{data.map(task => (
            <div className="preview" key={task._id || task.mal_id}>
                {isInSearch && <figure><img src = {task.imgurl || task.image_url} alt="could not load"/></figure>}
                <Link to={(!isInSearch && `/anime/${task._id}`) }>
                    <h2 style={{
                                textDecoration: task.completed ? 'line-through' : 'none'
                            }}>{ task.title }</h2>
                    {isInSearch && <h4>Score : {task.score}</h4>}
                    <p>{ task.synopsis }</p>
                </Link>
                {!isInSearch && task.completed && <div>You have completed this anime!</div>}
                {isInSearch && <button onClick = {() => handleClick(task)}>Add to watchlist</button>}
                <p></p>
                {isInSearch && <div><a href={task.url}><button>Check out this anime on MyAnimeList!</button></a></div>}
            </div>
          ))}
        </div>
     );
}
 
export default List;