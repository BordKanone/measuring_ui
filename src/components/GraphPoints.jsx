import React from "react";
import { PointsChannel } from "./PointsChannel";

export const GraphPoints = ({points}) => {

    return(
        <div style={{marginTop: '15px'}} >
            {points.map(point => <PointsChannel point= {point} channels={point.channels} key={point.code}/>  ) }
        </div>
    )
}