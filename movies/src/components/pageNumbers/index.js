import React, { useState, useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";

const PageNumbers = ({pageNumber, setPageNumber}) => {
	const buttons = []

	const startingNumber = pageNumber>5? pageNumber-4 : 1;
	
	if (startingNumber != 1){
			buttons.push(
					<Button 
					onClick={() => {setPageNumber(1)}}> 
					{1} 
					</Button>
			)
	}
	
	for(let i = startingNumber; i<startingNumber + 10; i++){
		if( i != pageNumber){
			buttons.push(
					<Button 
					onClick={() => {setPageNumber(i)}}> 
					{i} 
					</Button>
			)
		}
		else{
			buttons.push(
					<Button><b>{i}</b></Button>
			)
		}
	}
	return (
		<Grid container direction = "row" sx={{justifyContent: "center",alignItems: "flex-start",}}>
		{buttons}
		</Grid>

	)
}

export default PageNumbers;
