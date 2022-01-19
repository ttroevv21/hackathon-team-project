import React from "react";
import ReactLoading from "react-loading";
import "../styles/loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <ReactLoading type="spin" color="#696969" height={"10%"} width={"10%"} />
    </div>
  );
};

export default Loading;
