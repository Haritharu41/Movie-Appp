import { useMovieContext } from "../context/MovieContext";
import VideoCard from "../Components/videoCard";
import "../css/Favorites.css";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites && favorites.length>0) {
    console.log(favorites, "hello from faborites");
    
    return (
      <div className="favorites">
        <h2>Your favorite movies</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <VideoCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div> 
    );
  }
else{
    return (
        <div className="favorites-empty">
          <h2>No favorite movie yet</h2>
          <p>Start adding movies to your favorites and they will appear here.</p>
        </div>
      );
}
  
}

export default Favorites;
