import styled from 'styled-components'

import WowBlock from './WowBlock'

const StyledDivider = styled.div`
    width: 100%;
    border-bottom: 1px solid #cacaca;
    margin: 20px 0;
`

function Divider() {
    return (
        <WowBlock>
            <StyledDivider />
        </WowBlock>
    )
}

export default Divider
