import React,{useEffect,useState} from 'react'
import YouTube from 'react-youtube';
import './RowPost.css'
import { imageUrl ,Api_Key } from '../../Constants/Constants'
import axios from 'axios'

function RowPost(props) {
    const [movies , setMovies] = useState([])
    const [urlid ,seturlid] = useState('')
    useEffect(()=>{
        axios.get(props.url ).then(response=>{
            console.log(response.data);
            setMovies(response.data.results)
        }).catch(err=>{
            alert('network error')
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    const handleMovie =(id)=>{
        console.log(id)
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${Api_Key}&language=en-US`).then(response=>{
        if (response.data.results.length!==0) {
            seturlid(response.data.results[0])
        }else{
            console.log('array is empty');
        }    
            
    })

    }

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
                    )}
            </div>
          {urlid &&  <YouTube  videoId={urlid.key} opts={opts} /> }



        </div>
    )
}

export default RowPost
