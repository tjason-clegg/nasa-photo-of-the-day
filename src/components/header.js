import React from "react"
import styled from 'styled-components'

const Header = (props) => {
    const {date} = props
    return (
        <StyledH3> {date} </StyledH3>
    )
}


const StyledH3 = styled.h3`
color: lightblue;
font-size: 1.5rem;
padding: .5rem;
`;

export default Header