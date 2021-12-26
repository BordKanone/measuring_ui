import React from "react";
import TableMeasuring from "./TableMeasuring";
import classes from './PointsChannel.module.css'

export default function PointsChannel({ point , channels}){
    return(
        <div className={classes.pointCard}>
            <h1>
                {` Точка: ${point.name} - ${point.code}`}
            </h1>
            <div className={classes.tableChannel}>
                {channels.map(channel => <TableMeasuring channel={channel} key={channel.code} /> )}
            </div>
        </div>
    )
}