import React from "react";
import GridContainer from "../ui/GridContainer";
import Links from "../ui/Links";

function Contact() {
  return (
    <GridContainer
      padding={true}
      sm_colspan={4}
      sm_rowspan={1}
      md_colspan={4}
      md_rowspan={1}
    >
      <h1 className="font-semibold text-xl md:text-2xl">Wanna talk?</h1>
      <br />
      <p>Feel free to reach out!</p>
      <br />
      <Links/>
    </GridContainer>
  );
}

export default Contact;
