import React from 'react'
import {Api_Key} from '../../Constants/Constants'
import {useEffect , useState} from 'react'
import axios from  '../../axios'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${Api_Key}&language=en-US`).then((response)=>{
            console.log(response.data)
            setMovie(response.data)
        })
        
    })
    return (
        <div className="banner">
            <div className='content'>
                <h1 className="title" >Movie Name</h1>
                <div className="banner-button">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className='discription'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</h1>
            </div>
            <div className="fade"></div>
        
        </div>
    )
}

export default Banner
