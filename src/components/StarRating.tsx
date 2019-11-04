import React, { FunctionComponent } from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import Grid from "@material-ui/core/Grid";

export const StarRating: FunctionComponent<{
  rating: number;
  hideValue?: boolean;
}> = ({ rating, hideValue }) => {
  const stars = Number((rating / 2).toFixed(1));

  const floor = Math.floor(stars);
  const remainder = stars - floor;

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs>
        {Array(5)
          .fill(0)
          .map((_, i) => {
            return i < floor ? (
              <StarIcon key={i} />
            ) : i === floor && remainder >= 0.5 ? (
              <StarHalfIcon key={i} />
            ) : (
              <StarBorderIcon key={i} />
            );
          })}
      </Grid>
      {hideValue ? "" : <Grid item>{stars}</Grid>}
    </Grid>
  );
};
