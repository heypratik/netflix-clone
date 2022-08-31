import axios from './axios'
import React, { useState, useEffect } from 'react';
import './row.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SkeletonCard from './SkeletonCard';


export default function Row({title, fetchUrl, isSmall}) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    
    const baseUrl = "https://image.tmdb.org/t/p/original/"

    useEffect(function() {
      async function fetchData() {
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results)
        setIsLoading(true)
        return request

      }

      fetchData()
    }, [fetchUrl])

    function handleClick(movie) {
      if (trailerUrl) {
        setTrailerUrl("")
      } else {
        movieTrailer(movie.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"))
        })
        .catch((error) => console.log(error))
      }
    }

    const movieImages = movies.map(function(movie) {
        let bigPoster = `${baseUrl + movie.poster_path}`
        let thumbnailPoster = `${baseUrl + movie.backdrop_path}`
        return <img key={movie.id} onClick={() => handleClick(movie)} className={`row_poster ${!isSmall && 'row_poster_large'}`} src={isSmall ? thumbnailPoster : bigPoster } alt={movie.name}/>
    })

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      }
    }


    return (
        <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
            {isLoading ? "": <SkeletonCard cards={15}/>}
            {movieImages}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}