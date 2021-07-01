import React, { useContext, useEffect } from "react";
import star from "../../assets/icons/star.png";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import cart from "../../assets/icons/shopping-cart.png";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import { movieContext } from "../../contexts/MovieContext";
import Navbar from "../Navbar/Navbar";
import like from "../../assets/icons/heart.png";
import liked from "../../assets/icons/like.png";
import classes from "./favorite.module.css";
import { bottom } from "@popperjs/core";
import { useHistory } from "react-router";
import star2 from "../../assets/icons/star2.png";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
export default function Favorite() {
  const {
    favorite,
    getFavorite,
    addMovieToFavorite,
    giveRating,
    fetchRating,
    rating,
    deleteFavorite,
  } = useContext(movieContext);
  const history = useHistory();
  useEffect(() => {
    getFavorite();
  }, []);

  console.log(favorite);
  return (
    <>
      <div className={classes.font}>
        <Navbar />
        <h2 style={{ marginBottom: "40px" }}>Избранное</h2>
        <h4 style={{ marginBottom: "40px" }}>
          Лайкайте понравившиеся вам фильмы и добавляйте сюда
        </h4>
        {favorite.length
          ? favorite.map((movie) => (
            <div className={classes.productItem}>
              <div
                onClick={() => history.push(`/movie/${movie.movie.id}`)}
                className={classes.productImg}
              >
                <img src={movie.movie.image} alt="movieCardImage" />
              </div>
              <div className={classes.productList}>
                <h2>{movie.movie.title}</h2>
                <span className={classes.price}>{movie.movie.price} руб</span>
                {/* {favorite.movies.map((mov) => mov.item === data) ? ( */}
                <HighlightOffIcon
                  onClick={() => {
                    deleteFavorite(movie.movie.id);
                    console.log(movie.movie.id);
                  }}
                  color="primary"
                />
                <img
                  src={cart}
                  alt="cart"
                  onClick={() => {
                    // addMovieToOrderHistory(data);
                    // const genreArr = await axios.get("");
                  }}
                />
                В корзину
                <h5
                  onClick={() => {
                    history.push("/movie/comments");
                  }}
                >
                  comments
                </h5>
              </div>
            </div>
          ))
          : null}
      </div>
    </>
  );
}
