import { useState } from 'react'
import styled from 'styled-components'
import { Waypoint } from 'react-waypoint'

const Wow = styled.div`
    transition: 0.6s;
    transform: translate3D(
        0,
        ${props => (props.isVisible ? '0px' : '100px')},
        0
    );
    opacity: ${props => (props.isVisible ? '1' : '0')};
`

const WowBlock = ({ delay }) => {
    const [isVisible, setIsVisible] = useState(false)

    const handleSetVisible = () => {
        if (isVisible) return

        const delayCalculated = delay ? delay * 1000 : 0

        setTimeout(() => {
            setIsVisible(true)
        }, delayCalculated)
    }

    return (
        <Waypoint
            bottomOffset={'30%'}
            topOffset={'49%'}
            onEnter={handleSetVisible}
        >
            <Wow isVisible={isVisible}>{this.props.children}</Wow>
        </Waypoint>
    )
}

export default WowBlock
