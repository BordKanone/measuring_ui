import React from "react";
import { GraphPoints } from "./GraphPoints";


export const ViewProvider = ({view, points}) => {
    switch(view){
        case 'table':
            return(
                null
            )
        default:
            return <GraphPoints points={points}/>
    }
}