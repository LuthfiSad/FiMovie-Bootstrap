import axios from "axios";

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.REACT_APP_BASEURL}/movie/popular?api_key=${import.meta.env.REACT_APP_APIKEY}`
    );
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const getSearchMovies = async (query) => {
  try {
    const response = await axios.get(
      `${import.meta.env.REACT_APP_BASEURL}/search/movie?api_key=${import.meta.env.REACT_APP_APIKEY}&query=${query}`
    )
    return response.data.results
  } catch (error) {
    throw error
  }
}

export const getDetailMovie = async (id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.REACT_APP_BASEURL}/movie/${id}?api_key=${import.meta.env.REACT_APP_APIKEY}`
    )
    return response.data
  } catch (error) {
    throw error.response.data.status_message
  }
}