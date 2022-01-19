import React, { useState, useContext, useEffect } from "react";
import { Container } from "@mui/material";
import ProductsPagination from "../components/ProductsPagination";
import AllProducts from "../components/AllProducts";
import { MDBFooter } from "mdb-react-ui-kit";
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
      <div className="footer">
        <MDBFooter
          bgColor="black"
          className="text-center text-lg-start text-light"
        >
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="me-4 text-reset">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3"></i>Ajibek and Adilet
                  </h6>
                  <p>
                    This is Hackathon project of Adilet and Ajibek. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Laravel
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Help
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home"></i> Makers, Bishkek, Kyrgyzstan
                  </p>
                  <p>
                    <i className="fas fa-envelope"></i>
                    info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
          >
            © 2021 Copyright: <strong>Adilet Ajibek</strong>
          </div>
        </MDBFooter>
      </div>
    </div>
  );
};

export default HomePage;
