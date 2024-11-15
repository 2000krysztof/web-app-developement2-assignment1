import React, { useContext  } from "react";
import Avatar from '@mui/material/Avatar';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import img from '../../images/film-poster-placeholder.png'


const ActorCard = (props)=>{
	const actor = props.actor;
	
	return (
		<Card>
			<CardHeader
			title={actor.name}
		/>
		<CardMedia
		sx={{ height: 500 }}
		image={
			actor.profile_path
			? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`:
			img
		}

		/>
		</Card>
	);
}


export default ActorCard;
