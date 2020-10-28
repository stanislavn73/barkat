import React from 'react';
import styled from 'styled-components';
import Slider from '../ui-kit/Slider/Slider';

import projects from '../../utils/projects';
import arrowImg from '../../assets/images/icons/backArrow.png';

const Wrapper = styled.div`
    position: relative;
`;

const ArrowWrapper = styled.div`
    position: absolute;
    z-index: 40;
    top: 20px;
    background: rgba(255,255,255,0.6);
    display: flex;
    padding: 20px 20px 20px 40px;
    align-items: center;
    border-radius: 0 40px 40px 0;
    transform: translate3D(-20px, 0, 0);
    transition: 0.2s;

    &:hover {
        cursor: pointer;
        transform: translate3D(0, 0, 0);
    }
`;

const Arrow = styled.img`
    height: 40px;
`;

class ProjectPage extends React.PureComponent {
    handleGoBack = () => {
        this.props.history.goBack();
    }

    render() {

        const id = this.props.match.params.id;
        const project = projects.find(project => project.id === id);
        const slides = project.images;
        const title = project.title;
        const location = project.location;

        return (
            <Wrapper>
                <ArrowWrapper onClick={this.handleGoBack}>
                    <Arrow src={arrowImg} />
                </ArrowWrapper>
                <Slider
                    fullsize
                    title={title} subTitle={location} slides={slides}
                    maxHeight={window.innerHeight + 3}
                />
            </Wrapper>
        );
    }
}

export default ProjectPage;
