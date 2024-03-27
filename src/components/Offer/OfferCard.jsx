import React from "react";
import Card from "react-bootstrap/Card";

export const OfferCard = ({
  title,
  subtitle,
  text,
  imageSrc,
  altText,
  className,
}) => {
  return (
    <Card className={`offer-card ${className}`}>
      <Card.Body>
        <img
          src={imageSrc}
          width="80px"
          alt={altText}
          className="img-fluid img-offer"
        />
        <Card.Title className="title-offer">{title}</Card.Title>
        <Card.Subtitle className="mb-4 mt-2">{subtitle}</Card.Subtitle>
        <Card.Text className="mb-4"> {text}</Card.Text>
        <Card.Link className="link-offer" href="#">
          Download Offer
        </Card.Link>
        <Card.Link className="link-contact" href="#">
          Contact Us
        </Card.Link>
      </Card.Body>
    </Card>
  );
};
