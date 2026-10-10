import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

function MovieList({movies = []}) {
  
  return (
    <ul className="movie-list" >
    {movies.map((item) => 
    // key={movie.imdbID}
    // key={} свойство в которое мы кладём значение взятое из фильма в поле imbdID
    (<li key={item.imdbID}>
      <MovieCard movie={item}/>
      </li>)
    )}
    </ul>
  );
}

export default MovieList;
