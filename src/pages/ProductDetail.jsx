import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClientContext } from "../contexts/ClientProvider";
import Loading from "../components/Loading";
import { Grid, Container } from "@mui/material";

const ProductDetail = () => {
  const params = useParams();
  const { getProductDetail, detail } = useContext(ClientContext);

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
              <ul>
                <li>
                  <h3>{detail.name}</h3>
                </li>
                <li>
                  <strong>({detail.year})</strong>
                </li>
                <li>
                  <strong>{detail.description}</strong>
                </li>
                <li>
                  <span>Рейтинг фильма: </span>
                  <strong>{detail.mark}</strong>
                </li>
                <li>
                  <span>Актерский состав:</span>
                  {actArr.map((actor, i) => (
                    <strong key={i}>{actor}</strong>
                  ))}
                </li>
                <li>
                  <strong>{detail.price} Сом</strong>
                  <a href="/" className="btn btn-sm animated-button thar-two">
                    Добавить в корзину
                  </a>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default ProductDetail;
