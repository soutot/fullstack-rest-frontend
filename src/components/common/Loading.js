import * as React from 'react';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

const Spinner = styled.img`
  width: 70px;
  height: 70px;
  animation: rotating 5s linear infinite;
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  position: absolute;
`;

const Loading = (Children, title) => {
  return (
    <LoadingContainer>
      <Spinner src={logo} alt="Albelli loading" title="Albelli loading" />
      <span>Loading...</span>
    </LoadingContainer>
  );
}

export default Loading;
