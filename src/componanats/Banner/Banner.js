import React from 'react'
import {Api_Key , imageUrl} from '../../Constants/Constants'
import {useEffect , useState} from 'react'
import axios from  '../../axios'
import './Banner.css'

function Banner() {
    const [movie , setMovie] = useState(' ')
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${Api_Key}&language=en-US`).then((response)=>{
            console.log(response.data.results[0])
            setMovie(response.data.results[4])
        })
        
    },[])
    return (
        <div style={{ backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : " "})`}} >

        <div className="banner">
            <div className='content'>
                <h1 className="title" >{movie ? movie.title : " " }</h1>
                <div className="banner-button">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className='discription'>{movie ? movie.overview : " " }</h1>
            </div>
            <div className="fade"></div>
        
        </div>
        </div>
    )
}

export default Banner
