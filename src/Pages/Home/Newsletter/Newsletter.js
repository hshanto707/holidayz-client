import React from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter text-white">
      <h1 className="mb-4">Getting in touch is simpler than ever</h1>
      <p className="details text-white">We often send our subscribers special offers, tour guide, discount and our new tour updates.</p>
      <InputGroup className="w-50 mx-auto">
        <FormControl
          placeholder="Your Email"
        />
        <Button variant="primary" id="button-addon2">
          Subscribe
        </Button>
      </InputGroup>
    </div>
  );
};

export default Newsletter;
