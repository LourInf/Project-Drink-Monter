import React from "react";
import "./Offer.css";
import margarita from "../../assets/margarita.png";
import shaker from "../../assets/cocktail-shaker.png";
import { OfferCard } from "./OfferCard";

export const Offer = () => {
  return (
    <section id="offer" className="offer-container">
      <h1 className="container-offer-title">Oferta</h1>
      <div className="row align-items-center">
        <div className="col-md-6 text-center">
          <OfferCard
            className="first-offer"
            imageSrc={margarita}
            altText="Margarita"
            title="Organize Events"
            subtitle="Card Subtitle"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut etiam sit amet. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Eget mauris pharetra et ultrices neque ornare aenean. A iaculis at erat pellentesque. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Libero id faucibus nisl tincidunt eget nullam non nisi. Posuere morbi leo urna molestie at elementum. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Lectus nulla at volutpat diam ut venenatis tellus."
          />
        </div>
        <div className="col-md-6 text-center">
          <OfferCard
            className="second-offer"
            imageSrc={shaker}
            altText="Cocktail Shaker"
            title="Kursy Barmanski"
            subtitle="Card Subtitle"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales ut etiam sit amet. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Eget mauris pharetra et ultrices neque ornare aenean. A iaculis at erat pellentesque. Eget nunc lobortis mattis aliquam faucibus purus in massa tempor. Libero id faucibus nisl tincidunt eget nullam non nisi. Posuere morbi leo urna molestie at elementum. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Lectus nulla at volutpat diam ut venenatis tellus."
          />
        </div>
      </div>
    </section>
  );
};
