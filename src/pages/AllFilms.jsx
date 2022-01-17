import React, { useContext, useEffect } from "react";
import FilmCard from "../components/FilmCard";
import { AdminContext } from "../contexts/AdminProvider";

const AllFilms = (props) => {
  const { getProducts, products } = useContext(AdminContext);
  useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {products.map((item) => (
        <React.Fragment key={item.id}>
          <FilmCard movie={item} />
        </React.Fragment>
      ))}
    </ul>
  );
};

export default AllFilms;

//TO-DO: fetch data from tmdb api
//       add share button and links
//       add author +more
//       add search bar
