import React from "react";
import home1 from "../img/home1.png";
// import styled from "styled-components";
import { Layout, Description, Hide, Image } from "../styles";

const AboutSection = () => {
  return (
    <Layout>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come true
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography ideas that you have. We have
          professionals.
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a cam" />
      </Image>
    </Layout>
  );
};

export default AboutSection;
