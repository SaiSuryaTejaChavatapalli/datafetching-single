import { CustomButton, Heading } from "./styledComponent";
import React from "react";

function Styled() {
  return (
    <>
      <Heading>Sai Surya Teja</Heading>
      <CustomButton type="button" color="#ffffff" bgColor="#0070c1">
        Click
      </CustomButton>
      <CustomButton type="button" color="#0070c1" bgColor="#ffffff">
        Click
      </CustomButton>
    </>
  );
}

export default Styled;
