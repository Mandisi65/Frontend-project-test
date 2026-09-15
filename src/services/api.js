const API_KEY = "fa9296eeca1fe2f651946482efdc82a5";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();

    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}