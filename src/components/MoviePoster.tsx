import React, { FunctionComponent } from "react";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography
} from "@material-ui/core";
import { StarRating } from "./StarRating";
import { Link } from "react-router-dom";

interface Movie {
  title: string;
  posterPath: string;
  voteAverage: number;
  id: number;
}

export const MoviePoster: FunctionComponent<{ movie: Movie }> = ({ movie }) => {
  const image = `https://image.tmdb.org/t/p/w500${movie.posterPath}`;
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
      <Card>
        <CardActionArea>
          <CardMedia component="img" alt={movie.title} image={image} />
          <CardContent>
            <Typography>{movie.title}</Typography>
            <StarRating rating={movie.voteAverage} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
