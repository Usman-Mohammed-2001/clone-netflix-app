import React, { useState, useEffect } from "react";
import "./row.css";
import axios from "../../../utils/axios";

import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';


const base_url = "https://image.tmdb.org/t/p/original/";

 const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovie] = useState([]);
  const [trailUrl, setTrailerUrl] = useState("");

  // const base_url = `https://image.tmdb.org/t/p/original`;
    

/**************/
  useEffect(() => {
    //***************************************** */
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })(); //End for sync
  }, [fetchUrl]); //useeffect end

  /********************/



  /****************************************************/
  const handleClick = (movie) => {
    if (trailUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
      .then((url) => {
          console.log(url)
          const urlParams = new URLSearchParams(new URL(url).search)
          console.log(urlParams);
          console.log(urlParams.get('v'))
          setTrailerUrl(urlParams.get('v'));
        }
      )
    }
  }
  /*************************************/

  
  /**************/
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  /***************/

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
             alt={movie.name}
            
          />
        ))}
      </div>

       <div style={{ padding: '40px' }}>
        {trailUrl && <YouTube videoId={trailUrl} opts={opts} />}
      </div> 
    </div>
  );

  /***************/
}; //main row function end

export default Row;


















