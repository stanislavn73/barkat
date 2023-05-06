import { memo } from 'react'
import styled from 'styled-components'

const StyledBold = styled.span`
    font-weight: 700;
    color: black;
`

function Bold(props) {
    return <StyledBold>{props.children}</StyledBold>
}

export default memo(Bold)
