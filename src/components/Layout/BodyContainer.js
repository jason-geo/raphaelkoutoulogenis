import React from "react";
import MansoryWrapper from "./MansoryWrapper";
import About from "./About";

const BodyContainer = ({ activeLink }) => {
  switch (activeLink) {
    case 1:
      return (
        <div>
          <MansoryWrapper />
        </div>
      );
    case 2:
      return <div><About /></div>;
    case 3:
      return <div>This is the Contact Component.</div>;
    default:
      return <div>Sorry, this page doesn't exist.</div>;
  }
};

export default BodyContainer;