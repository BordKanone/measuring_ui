import React from "react";
import { GraphPoints } from "./GraphPoints";
import TablePoints from "./TablePoints"


export const ViewProvider = ({view, points}) => {
    switch(view){
        case 'table':
            return <TablePoints points={points} />
            
        default:
            return <GraphPoints points={points}/>
    }
}