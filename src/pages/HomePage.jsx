import React, { useState, useContext, useEffect } from "react";
import { Container } from "@mui/material";
import ProductsPagination from "../components/ProductsPagination";
import AllProducts from "../components/AllProducts";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../contexts/ClientProvider";

const HomePage = (props) => {
  let search = new URLSearchParams(window.location.search);
  let navigate = useNavigate();

  const [genre, setGenre] = useState("");
  const [value, setValue] = useState("");
  const { getProducts } = useContext(ClientContext);

  function searchGenre(key, value) {
    console.log(value);
    search.set(key, value);
    console.log(window.location.pathname);
    const newPath = `${window.location.pathname}?${search.toString()}`;
    navigate(newPath);
    setGenre(search.get("genre_like"));
    setValue(search.get("q"));
    getProducts();
  }

  useEffect(() => {
    setGenre(search.get("genre_like"));
    setValue(search.get("q"));
  }, []);

  return (
    <div className="homepage">
      <div className="header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpUK8P-c-vbzNt7ztxSGIgt_-OSNZWj3MwcA&usqp=CAU"
          alt="header"
        ></img>
      </div>
      <div className="carousel_container"></div>
      <div className="container">
        <div className="nav-left">
          <h2>Навигация</h2>

          <div className="block">
            <div className="genre-block">
              <b style={{ fontSize: "14px", color: "white" }}>Жанры</b>
              <br />
              <span
                className="navigate-span"
                onClick={(event) => {
                  searchGenre(
                    "genre_like",
                    event.target.innerText.toLowerCase()
                  );
                }}
              >
                Аниме
              </span>
              <br />
              <span
                className="navigate-span"
                onClick={(event) => {
                  searchGenre(
                    "genre_like",
                    event.target.innerText.toLowerCase()
                  );
                }}
              >
                Криминал
              </span>
              <br />
              <span
                className="navigate-span"
                onClick={(event) => {
                  searchGenre(
                    "genre_like",
                    event.target.innerText.toLowerCase()
                  );
                }}
              >
                Драма
              </span>
            </div>
            <div className="year-block">
              <b style={{ fontSize: "14px", color: "white" }}>По году</b>
              <br />
              <a href="/2015/">2015</a>
              <br />
              <a href="/2016/">2016</a>
              <br />
              <a href="/2017/">2017</a>
              <br />
              <a href="/2018/">2018</a>
              <br />
              <a href="/2019/">2019</a>
              <br />
              <a href="/2020/">2020</a>
              <br />
              <a href="/2021/">2021</a>
              <br />
              <a href="/2022/">2022</a>
              <br />
            </div>
          </div>
        </div>
        <div className="films">
          <Container>
            <AllProducts />
            <ProductsPagination />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
