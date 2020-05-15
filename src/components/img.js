import React from "react"

const Image = (props) => {
    const {image} = props
    console.log(image)
    return (

        <div>
            <img src={image}/>
        </div>
    )
}

export default Image