import React from "react";
import styles from "./Cards.module.scss";
import {Link} from "react-router-dom";

const Cards = ({ results, page }) => {
  let display;
  //console.log(results);

  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, status } = x;
      return (
        <div
        className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
        >
          <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
            <img src={image} alt={name} className={`${styles.img} img-fluid`} />
            <div style={{ padding: "10px" }} className="content">
              <div className="fs-5 fw-bold mb-4"> {name} </div>
              <div className="">
                <div className="fs-6 fw-normal">Last location</div>
                <div className="fs-5"> {location.name} </div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {" "}
                  {status}{" "}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {" "}
                  {status}{" "}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {" "}
                  {status}{" "}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "No Characters Found :/";
  }
  return <div>{display}</div>;
};

export default Cards;
