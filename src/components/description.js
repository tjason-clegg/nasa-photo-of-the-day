import React from "react"
import styled from 'styled-components'


const Description = (props) => {
    const {explanation} = props
    return (
        <StyledParagraph>{explanation}</StyledParagraph>
    )
}

const StyledParagraph = styled.p`
color: blue;
font-size: 1.2rem;
padding: 1rem;

`;

export default Description