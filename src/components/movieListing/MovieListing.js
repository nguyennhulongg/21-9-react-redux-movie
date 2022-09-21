import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlide";
import MovieCard from "../movieCard/MovieCard";
import "./movieListing.css"

const MovieListing = () => {
  const movies = useSelector(getAllMovies);

  return ( 
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {movies && movies.length && 
          movies.map(movie => <MovieCard key={movie.id} data= {movie} />)}
        </div>
      </div>
    </div>
  );
}

export default MovieListing;