import React from "react";
import styled from "styled-components";

function OverQuotaMsg() {
  return (
    <MessageContainer>
      <h2>
        Daily request limit to{" "}
        <a target="blank" href="https://spoonacular.com/food-api/">
          spoonacular API
        </a>{" "}
        has been reached :/ <br /> <br /> Try again tomorrow ;-)
      </h2>
    </MessageContainer>
  );
}

const MessageContainer = styled.div`
  h2 {
    color: var(--red);
  }
  a {
    color: var(--red);
  }
  margin: auto 0;
  height: auto;
  font-weight: bolder;
  text-align: center;
`;

export default OverQuotaMsg;
