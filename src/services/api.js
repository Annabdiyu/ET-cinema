const API_KEY="d719ef6e6d3a14bfef6803e53e97c41f";
const BASE_URL="https://api.themoviedb.org/3"

export const getpopularMovies=async()=>{
    const response = await fetch('${BASE_URL}/movie/popular?api_key=${API_KEY}');
    const data = await response.json()
    return data.results
};

export const getpopularMovies=async()=>{
    const response = await fetch('${BASE_URL}/movie/popular?api_key=${API_KEY}');
    const data = await response.json()
    return data.results
};