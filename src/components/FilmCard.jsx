import React from "react";

const FilmCard = (props) => {
  return (
    <li className="movieCard">
      <img className="poster" src={props.movie.image} alt={props.movie.name} />
      <h3>{props.movie.name}</h3>
      <span className="movieYear">({props.movie.year})</span>
      <p>{props.movie.description}</p>
      <div className="col-md-3 col-sm-3 col-xs-6">
        {" "}
        <a href="/" className="btn btn-sm animated-button thar-two">
          Подробнее
        </a>{" "}
        <a href="/" className="btn btn-sm animated-button thar-two">
          Добавить в корзину
        </a>{" "}
      </div>
    </li>
  );
};

export default FilmCard;
