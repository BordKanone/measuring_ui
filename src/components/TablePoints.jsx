import React from "react";
import TablePointsChannel from "./TablePointsChannel"

export default function TablePoints({points}) {

    return(
        <div style={{marginTop: '15px'}} >
            {points.map(point => <TablePointsChannel point= {point} channels={point.channels} key={point.code}/>  ) }
        </div>
    )
}