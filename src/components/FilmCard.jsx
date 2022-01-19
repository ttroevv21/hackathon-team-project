import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import { ClientContext } from "../contexts/ClientProvider";

const FilmCard = (props) => {
  const { addAndDelProductInCart, checkProductInCart } =
    useContext(ClientContext);
  return (
    <div className="film-cards">
      <li className="movieCard">
        <img
          className="poster"
          src={props.movie.image}
          alt={props.movie.name}
        />
        <h3>{props.movie.name}</h3>
        <span className="movieYear">({props.movie.year})</span>
        <p>{props.movie.description}</p>
        <br></br>
        <p>{props.movie.price} сом</p>
        <div className="col-md-12 col-sm-3 col-xs-6">
          {" "}
          <div className="buttons">
            <Link to={`/product/${props.movie.id}`}>
              <button className="btn btn-sm animated-button thar-two">
                Подробнее
              </button>{" "}
            </Link>
            <CardActions>
              {checkProductInCart(props.movie.id) ? (
                <button
                  onClick={() => addAndDelProductInCart(props.movie)}
                  className="btn btn-sm animated-button thar-two"
                >
                  Убрать из корзины
                </button>
              ) : (
                <button
                  onClick={() => addAndDelProductInCart(props.movie)}
                  className="btn btn-sm animated-button thar-two"
                >
                  Добавить в корзину
                </button>
              )}
            </CardActions>
          </div>
        </div>
      </li>
    </div>
  );
};

export default FilmCard;
