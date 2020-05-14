import React from "react"
import styled from 'styled-components'

const Title = (props) => {
    const {title} = props
    return (
        <StyledH2> {title} </StyledH2>
    )
}

const StyledH2 = styled.h2`
color: blue;
font-size: 2rem;
padding: 1rem;
`;

export default Title