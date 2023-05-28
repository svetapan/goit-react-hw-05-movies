const getSearchMovie = async (searchData) => {
   try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?&query=${searchData}&api_key=19a77e83d08632a429865980c71677d1`
      );

      if (!response.ok) {
        throw new Error(
          `Failed to fetch movie: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch movie: ${error.message}`);
    }
};

export default getSearchMovie;
