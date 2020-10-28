import React from 'react';
import styled from 'styled-components';
import {
    Link
} from 'react-router-dom';
import WowBlock from '../ui-kit/WowBlock';

const GridWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    width: calc(50% - 5px);
  }
`;

const GridItem = styled.div`
  position: relative;
  margin-bottom: 10px;
  border-radius: 6px;
  background: ${props => props.theme.main.primary};
  border: 3px solid ${props => props.theme.main.primary};
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.26);
  overflow: hidden;
  transition: 0.2s;

  &:hover {
    box-shadow: 5px 7px 7px 0px rgba(0,0,0,0.4);
    transform: translate3D(-2px, -2px, 0);
  }
`;

const GridItemImage = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  margin-bottom: -3px;
  border-radius: 3px 3px 6px 6px;
  transition: 0.2s;
`;

const GridItemTitleWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: calc(100% + 200px);
  height: 100%;
  left: -100px;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    div {
      animation: rotate 0.2s forwards;
      animation-delay: 0.2s;
      div {
        animation: rotateBack 0.1s forwards;
        animation-delay: 0.2s;
      }
    }
  }
`;

const GridItemTitle = styled.div`
  text-align: center;
  font-size: 18px;
  margin-bottom: 10px;
  color: white;
  width: 100%;
  height: 50px;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.main.primary};
  background: rgba(255,255,255,0.8);
  opacity: 0;
  animation-play-state: paused;
  animation-delay: 0.2s;
  @keyframes rotate {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
      transform: rotate(45deg);
      height: 50px;
    }
    100% {
      opacity: 1;
      height: 100%;
      transform: rotate(45deg);
    }
  }
`;

const ItemTitle = styled.div`
  transition: 0.2s;
  animation-play-state: paused;

  @keyframes rotateBack {
    100% {
      transform: rotate(-45deg);
    }
  }
`;

function OnClick(data) {
    return function () {};
}

function ImageGrid({ gridItems }) {
    return (
        <GridWrapper>
            {gridItems.map((item, index) => (
                <WowBlock delay={index / 10} key={item.id}>
                    <GridItem onClick={OnClick(item.id)} >
                        <Link to={`/projects/${item.id}`}>
                            <GridItemImage src={item.thumbnail} />
                            <GridItemTitleWrapper>
                                <GridItemTitle>
                                    <ItemTitle>
                                        {item.title}
                                    </ItemTitle>
                                </GridItemTitle>
                            </GridItemTitleWrapper>
                        </Link>
                    </GridItem>
                </WowBlock>
            ))}
        </GridWrapper>
    );
}

export default React.memo(ImageGrid);
