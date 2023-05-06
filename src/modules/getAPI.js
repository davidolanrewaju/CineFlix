class Movies {
  constructor(url) {
    this.url = url;
  }

  getMovies = async () => {
    const response = await fetch(this.url, {
      method: 'GET',
      header: {
        'Content-type': 'application/json; charset=UTF-8',
      },

    });

    const data = await response.json();

    return data;
  };
}
export default Movies;
