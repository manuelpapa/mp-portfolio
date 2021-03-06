import React from "react";
import styled from "styled-components";
import { Layout, Description, Hide, Image } from "../styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What Products Do We Offer</h4>
        <div className="answer">
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(Layout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.5rem;
    margin: 2rem 0;
    width: 100%;
  }

  .question {
    cursor: pointer;
    padding: 3rem 0;
  }

  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
