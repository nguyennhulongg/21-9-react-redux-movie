import React, { useEffect } from "react";
import MovieListing from "../movieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlide";

const Home = () => {
  const dispatch = useDispatch();
  useEffect( () =>{
    const fetchMovie = async () => {
      const response = await movieApi.get(`movie/?api_key=${APIkey}`)
      dispatch(addMovies(response.data.results));
      console.log(response.data.results);
    }  
    fetchMovie();
  }, [])
  
  return ( 
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div> 
  );
}

export default Home;