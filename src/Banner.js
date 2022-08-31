import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import axios from './axios'
import requests from './requests'
import './banner.css'


export default function Banner() {

    const [movies, setMovies] = useState(() => [])

    useEffect(function() {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals)
            const randomNum = Math.floor(Math.random() * request.data.results.length - 1)
            setMovies(request.data.results[randomNum])
            return request
        }
        fetchData()
    }, [])

    const styling = {
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center"
    }

    function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str; 
}

  return (
    <header className='banner' style={styling || <Skeleton />}>
        <div className='banner_contents'>
            <h1 className='banner_title'>{movies.name || <Skeleton width="40%"/>}</h1>
            <div className='banner_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button> 
            </div>
            <p className='banner_description'>{truncate(movies.overview, 150) || <Skeleton count={3} />}</p>
       </div>
<div className='banner--fadeBottom'></div>

    </header>
  )
}