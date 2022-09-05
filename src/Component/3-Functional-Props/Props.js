// Functional Component

import React from "react";
function Props(props){
    return (
        <div>
            <h1>Hello {props.name} Welcome to React Props</h1>
            {props.children[0]}
        </div>
    )
}
export default Props;
