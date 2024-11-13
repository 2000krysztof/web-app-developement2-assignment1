import React from "react";
import { useQuery} from "react-query";
import { getTrendingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import PageTemplate from '../components/templateMovieListPage';
import AddToFavourtes from "../components/cardIcons/addToFavorites";



const TrendingMoviesPage = () => {
	const {data, error, isLoading, isError} = useQuery("popular", getTrendingMovies);

	if(isLoading){
		return <Spinner/>
	}

	if(isError){
		return <h1>{error.message}</h1>
	}
	const movies = data.results;

	return (
		<PageTemplate
			title="Trending Movies"
			movies = {movies}
			action = {(movie)=>{
				return <AddToFavourtes movie = {movie}/>
			}}

		/>
	)
}

export default TrendingMoviesPage;