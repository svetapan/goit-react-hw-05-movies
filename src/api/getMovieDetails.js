const getMovieDetails = async (id) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=19a77e83d08632a429865980c71677d1`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch images: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default getMovieDetails;