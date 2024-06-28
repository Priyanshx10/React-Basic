import React from "react";

const Number ={
    x : 5,
    y : 6,
    z : 8
}

function Addition() {
    return (
        <h1>
            Addition = 
            {Number.x + Number.y + Number.z}
        </h1>
    )
}

export default Addition;