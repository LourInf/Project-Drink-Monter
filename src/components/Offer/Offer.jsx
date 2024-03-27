import React from "react";
import "./Offer.css";
import herbs from "../../assets/herb.png";
import margarita from "../../assets/margarita.png";
import shaker from "../../assets/cocktail-shaker.png";
import Card from "react-bootstrap/Card";

export const Offer = () => {
  return (
    <section id="offer" className="offer-container">
      <h1 className="container-offer-title">Oferta</h1>
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <div className="first-offer">
            <Card
              style={{
                width: "45rem",
                height: "30rem",
                backgroundColor: "transparent",
                border: "1px solid #bfa76f",
                color: "#f7f7f7",
                marginLeft: "140px",
              }}
            >
              <Card.Body>
                <img
                  src={margarita}
                  width="80px"
                  alt="margarita"
                  className="img-fluid img-offer"
                />
                <Card.Title className="title-offer">Organize Events</Card.Title>

                <Card.Subtitle className="mb-4 mt-2">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </Card.Text>
                <Card.Link className="link-offer" href="#">
                  Download Offer
                </Card.Link>
                <Card.Link className="link-contact" href="#">
                  Contact Us
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <div className="second-offer">
            <Card
              style={{
                width: "45rem",
                height: "30rem",
                backgroundColor: "transparent",
                border: "1px solid #bfa76f",
                color: "#f7f7f7",
              }}
            >
              <Card.Body>
                <img
                  src={shaker}
                  width="100px"
                  alt="margarita"
                  className="img-fluid img-offer"
                />
                <Card.Title className="title-offer">Kursy Barmanski</Card.Title>
                <Card.Subtitle className="mb-4 mt-2">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content. Some quick example text to
                  build on the card title and make up the bulk of the card's
                  content.
                </Card.Text>
                <Card.Link className="link-offer" href="#">
                  Download Offer
                </Card.Link>
                <Card.Link className="link-contact" href="#">
                  Contact Us
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
