import React from 'react';
import styled from 'styled-components';

const StyledBold = styled.span`
  Font-weight: 700;
  color: black;
`;

function Bold(props) {
    return (
        <StyledBold>
            {props.children}
        </StyledBold>
    );
}

export default React.memo(Bold);
