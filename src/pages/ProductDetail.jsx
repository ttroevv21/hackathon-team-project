import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ClientContext } from "../contexts/ClientProvider";
import Loading from "../components/Loading";
import { Grid, Container, Button, CardActions } from "@mui/material";
import { MDBFooter } from "mdb-react-ui-kit";

const ProductDetail = () => {
  const params = useParams();
  const {
    getProductDetail,
    detail,
    addAndDelProductInCart,
    checkProductInCart,
  } = useContext(ClientContext);

  useEffect(() => {
    getProductDetail(params.id);
  }, []);

  if (!detail) {
    return <Loading />;
  }

  let actArr = detail.actors.split(",");
  // console.log(actArr);

  return (
    <Container>
      <div className="product-detail">
        <Grid container>
          <Grid xs={12} sm={6} md={6} item>
            <div>
              <img src={detail.image} alt={detail.name} />
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={6} item>
            <div>
              <ul className="movie-description">
                <li>
                  <h2>{detail.name}</h2>
                </li>
                <li>
                  <h3>О фильме</h3>
                </li>
                <li>
                  <span>Год производства: ({detail.year})</span>
                </li>
                <li>
                  <span>Рейтинг фильма: </span>
                  <strong>{detail.mark}</strong>
                </li>
                <li>
                  <span>Актерский состав: </span>
                  {actArr.map((actor, i) => (
                    <span key={i}>{actor}</span>
                  ))}
                </li>
                <li>
                  <span>Жанр: </span>
                  <span>{detail.genre}</span>
                </li>
                <li>
                  <strong>{detail.price} Сом</strong>
                  <li className="detail-btn">
                    <CardActions>
                      {checkProductInCart(detail.id) ? (
                        <Button
                          color={"primary"}
                          variant={"contained"}
                          onClick={() => addAndDelProductInCart(detail)}
                        >
                          Убрать из корзины
                        </Button>
                      ) : (
                        <Button
                          color={"success"}
                          variant={"contained"}
                          onClick={() => addAndDelProductInCart(detail)}
                        >
                          Добавить в корзину
                        </Button>
                      )}
                      <Link to={"/payment"}>
                        <Button color={"success"} variant={"contained"}>
                          Оплатить
                        </Button>
                      </Link>
                    </CardActions>
                  </li>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
      <div>
        <strong>{detail.description}</strong>
      </div>
      <div className="footer">
        <MDBFooter
          bgColor="white"
          className="text-center text-lg-start text-dark"
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
            className="text-center p-4 text-dark"
            style={{ backgroundColor: "white" }}
          >
            © 2021 Copyright: <strong>Adilet Ajibek</strong>
          </div>
        </MDBFooter>
      </div>
    </Container>
  );
};

export default ProductDetail;
