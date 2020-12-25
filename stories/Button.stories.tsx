import React, { useState } from "react";
import { Button } from "./Button";

export default {
  title: "Button",
};

export const blackButton = () => (
  <div>
    <Button variant="black" onClick></Button>
  </div>
);

export const whiteButton = () => (
  <div>
    <Button variant="white">button</Button>
  </div>
);

export const DefaultComponent = () => {
  return (
    <div>
      <Button onClick>Button</Button>
    </div>
  );
};
