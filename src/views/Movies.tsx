import React, { FunctionComponent } from "react";
import { useQuery } from "@apollo/react-hooks";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import { MoviePoster } from "../components/MoviePoster";
import { useParams } from "react-router-dom";

import { loader } from "graphql.macro";
const NOW_PLAYING = loader("../gql/now-playing.graphql");
const POPULAR = loader("../gql/popular.graphql");
const UPCOMING = loader("../gql/upcoming.graphql");
const TOP_RATED = loader("../gql/top-rated.graphql");

export const Movies: FunctionComponent = () => {
  const params: any = useParams();

  const query = (() => {
    switch (params.query) {
      case "now-playing":
        return NOW_PLAYING;
      case "upcoming":
        return UPCOMING;
      case "popular":
        return POPULAR;
      case "top-rated":
        return TOP_RATED;
      default:
        throw new Error("Oops");
    }
  })();

  const { loading, data } = useQuery(query);

  return loading ? (
    <CircularProgress />
  ) : data && Object.keys(data.movie).length ? (
    (Object.values(data.movie)[0] as any).results.map((result: any) => (
      <Grid item xs={12} sm={6} md={4} key={result.id}>
        <MoviePoster movie={result} />
      </Grid>
    ))
  ) : (
    <p>Oops</p>
  );
};
