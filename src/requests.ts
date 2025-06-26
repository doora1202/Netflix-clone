// TMDBからのリクエストURLを定数として定義します

// .envファイルからAPIキーを読み込みます
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

if (!API_KEY) {
  throw new Error(
    "TMDB API key not found. Please set VITE_TMDB_API_KEY in your .env file."
  );
}

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ja-JP`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=ja-JP`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;