import React, { useState } from "react";
import { Button } from "./Button";

export default {
  title: "Button",
};

export const blackButton = () => (
  <div>
    <Button variant="black">Button</Button>
  </div>
);

export const whiteButton = () => (
  <div>
    <Button variant="white">Button</Button>
  </div>
);

export const DefaultComponent = () => {
  return (
    <div>
      <Button>Button</Button>
    </div>
  );
};
