import React, { FunctionComponent, useState, MouseEvent } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      color: "white"
    },
    title: {
      flexGrow: 1
    }
  })
);

export const MovieAppBar: FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const classes = useStyles();

  const openMovieMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Movies
        </Typography>
        <Button onClick={openMovieMenu} className={classes.menuButton}>
          Movies
        </Button>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem to="/movies/popular" component={Link} onClick={handleClose}>
            Popular
          </MenuItem>
          <MenuItem
            to="/movies/now-playing"
            component={Link}
            onClick={handleClose}
          >
            Now Playing
          </MenuItem>
          <MenuItem
            to="/movies/upcoming"
            component={Link}
            onClick={handleClose}
          >
            Upcoming
          </MenuItem>
          <MenuItem
            to="/movies/top-rated"
            component={Link}
            onClick={handleClose}
          >
            Top rated
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
