import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';

const Wow = styled.div`
    transition: 0.6s;
    transform: translate3D(
        0,
        ${(props) => (props.isVisible ? '0px' : '100px')},
        0
    );
    opacity: ${(props) => (props.isVisible ? '1' : '0')};
`;

class WowBlock extends React.PureComponent {
    state = {
        visible: false,
    };

    handleSetVisible = () => {
        if (this.state.visible) return;

        const { delay } = this.props;

        const delayCalculated = delay ? delay * 1000 : 0;

        setTimeout(() => {
            this.setState({ visible: true });
        }, delayCalculated);
    };

    render() {
        const { visible } = this.state;

        return (
            <Waypoint
                bottomOffset={'30%'}
                topOffset={'49%'}
                onEnter={this.handleSetVisible}
            >
                <Wow isVisible={visible}>{this.props.children}</Wow>
            </Waypoint>
        );
    }
}

export default WowBlock;
