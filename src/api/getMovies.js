// const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day';
// const API_KEY = '19a77e83d08632a429865980c71677d1';

const getMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=19a77e83d08632a429865980c71677d1`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch images: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Failed to fetch images: ${error.message}`);
  }
};

export default getMovies;
