import React from 'react'
import styled from 'styled-components';

function OverQuota() {
  return (
    <NoticeContainer>
        <h2>Daily request limit to <a target="blank" href="https://spoonacular.com/food-api/">spoonacular API</a> has been reached :/ <br /> <br /> Try again tomorrow ;-)</h2>
    </NoticeContainer>
  )
}

const NoticeContainer = styled.div`
h2{
	color:var(--red);
}
a{
	color:var(--red);
}
	margin: auto 0;
	height:auto;
	font-weight:bolder;
	text-align: center;
`;

export default OverQuota