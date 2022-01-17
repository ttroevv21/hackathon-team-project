import React from "react";
import { Container } from "@mui/material";
import ProductsPagination from "../components/ProductsPagination";
import AllProducts from "../components/AllProducts";

const HomePage = (props) => {
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
              <a href="/anime/">Аниме</a>
              <br />
              <a href="/biographical/">Биографии</a>
              <br />
              <a href="/action/">Боевики</a>
              <br />
              <a href="/western/">Вестерны</a>
              <br />
              <a href="/military/">Военные</a>
              <br />
              <a href="/detective/">Детективы</a>
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
  );
};

export default HomePage;
