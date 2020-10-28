import React, { useRef } from 'react';
import styled from 'styled-components';

const AnimationWrapper = styled.div`
  height: 100%;
  width: 100%;
  opacity: 0;
  animation: fadeIn 0.8s forwards;
  animation-delay: ${props => props.delay || '0'}s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

function FadeInWrapper({ delay, children }, ref) {
    return (
        <AnimationWrapper ref={ref} delay={delay}>
            {children}
        </AnimationWrapper>
    );
}

export default  React.forwardRef(FadeInWrapper);
