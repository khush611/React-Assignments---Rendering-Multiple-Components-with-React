import React, { Component, useState } from "react";
import "../styles/App.css";

import Name from "./Name";
import Description from "./Description";
const App = () => {
  return (
    <>
      <Name name="preserve water" />
      <Description description="helps you supervise the water leakage control" />
    </>
  );
};

export default App;
