import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Dohvat TOP 10 filmova
export const fetchTopMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=hr-HR&page=1`
    );
    return response.data.results?.slice(0, 10) || [];
  } catch (error) {
    console.error("Error fetching top movies:", error);
    return [];
  }
};

// Dohvat TOP 10 serija
export const fetchTopTVShows = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=hr-HR&page=2`
    );
    return response.data.results.slice(0, 10);
  } catch (error) {
    console.error("Error fetching top TV shows:", error);
    return [];
  }
};

// Pretraga sadržaja
export const searchContent = async (type, query) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/${type}?api_key=${API_KEY}&language=hr-HR&query=${query}`
    );
    return response.data.results || [];
  } catch (error) {
    console.error(`Error searching ${type}:`, error);
    return [];
  }
};

// Dohvat detalja sadržaja
export const fetchDetails = async (type, id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${type}/${id}?api_key=${API_KEY}&language=hr-HR&append_to_response=videos`
    );
    return response.data || {};
  } catch (error) {
    console.error(`Error fetching ${type} details:`, error);
    return {};
  }
};
