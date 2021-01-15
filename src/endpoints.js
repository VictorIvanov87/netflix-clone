const API_KEY = process.env.REACT_APP_IMDB_API_KEY;

const endpoints = [
	{title: 'Netflix Original', fetchUrl: `/discover/tv?api_key=${API_KEY}&with_networks=213`, isLargeRow: true},
	{title: 'Trending', fetchUrl: `/trending/all/week?api_key=${API_KEY}&language=en-US`, isLargeRow: false},
	{title: 'Top Rated', fetchUrl: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, isLargeRow: false},
	{title: 'Popular', fetchUrl: `/movie/popular?api_key=${API_KEY}&language=en-US`, isLargeRow: false},
	{title: 'Upcoming', fetchUrl: `/movie/upcoming?api_key=${API_KEY}&language=en-US`, isLargeRow: false},
	{title: 'Comedy', fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`, isLargeRow: false},
	{title: 'Action', fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`, isLargeRow: false},
	{title: 'Drama', fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=18&language=en-US`, isLargeRow: false},
	{title: 'Horror', fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`, isLargeRow: false},
	{title: 'Documentary', fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=en-US`, isLargeRow: false},
	{title: 'Animation', fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=en-US`, isLargeRow: false},
	{title: 'Mistery', fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=en-US`, isLargeRow: false},
	{title: 'Family', fetchUrl: `/discover/movie?api_key=${API_KEY}&with_genres=10751&language=en-US`, isLargeRow: false},
]

export default endpoints;