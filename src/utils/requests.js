const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
 
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  // fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=25`,
  fetchTopComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  // fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genre=99`,
  fetchTopDocumentaries: `/discover/movie?api_key=${API_KEY}&with_geners=99`,
  fetchDrama: `tv/popular?api_key=${API_KEY}&language=en-US&page=18`,
};

export default requests;
