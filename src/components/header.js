import React from "react"

const Header = (props) => {
    const {date} = props
    return (
        <h2> {date} </h2>
    )
}

export default Header