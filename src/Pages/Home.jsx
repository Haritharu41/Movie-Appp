import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import VideoCard from "../Components/videoCard";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies....");
      } finally {
        setLoading(false);
      }
    };

    loadingPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResult = await searchMovies(searchQuery);
      setMovies(searchResult);
      setError(null);
    } catch (err) {
      console.log(err);

      setError("Failed to search movies..");
    } finally {
      setLoading(false);
    }

    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form ">
        <input
          type="text"
          placeholder="Search for movies"
          className="search-input "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading"> loading....</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <VideoCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
// movie.title.toLowerCase().startsWith(searchQeuery) &&