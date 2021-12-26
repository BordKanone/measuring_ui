import React from "react";
import GraphMeasuring from "./GraphMeasuring";
import classes from './PointsChannel.module.css'

export const PointsChannel = ({ point , channels}) => {
    return(
        <div className={classes.pointCard}>
            <h1>
                {` Точка: ${point.name} - ${point.code}`}
            </h1>
            <div className={classes.graphChannel}>
                {channels.map(channel => <GraphMeasuring channel={channel} key={channel.code} /> )}
            </div>
        </div>
    )
}