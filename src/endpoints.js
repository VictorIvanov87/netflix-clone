const API_KEY = process.env.REACT_APP_IMDB_API_KEY;

const endpoints = [
	{title: 'Netflix Original', fetchUrl: `/discover/tv?api_key=${API_KEY}&with_networks=213`, isLargeRow: true},
	{title: 'Trending', fetchUrl: `/trending/all/week?api_key=${API_KEY}&language=en-US`, isLargeRow: false},
	{title: 'Top Rated', fetchUrl: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, isLargeRow: false}
]

export default endpoints;