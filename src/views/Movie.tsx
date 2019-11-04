import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";

import { loader } from "graphql.macro";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { StarRating } from "../components/StarRating";

const MOVIE = loader("../gql/movie.graphql");

export const Movie: FunctionComponent = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(MOVIE, { variables: { id } });
  return loading ? (
    <CircularProgress />
  ) : (
    <Grid item xs>
      <Grid container spacing={4}>
        <Grid item xs sm={4} md={4}>
          <img
            src={`https://image.tmdb.org/t/p/w500${
              data.movie.single.posterPath
            }`}
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs>
          <Typography variant="h3">{data.movie.single.title}</Typography>
          <Typography>{data.movie.single.tagline}</Typography>
          <StarRating rating={data.movie.single.voteAverage} hideValue={true} />
        </Grid>
      </Grid>
    </Grid>
  );
};
