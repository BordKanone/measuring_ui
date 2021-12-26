import React from "react";
import CustomButton from "./UI/CustomButton";

export const Points = ({setPoint, points}) => {
    points.map(point => {
        return(
            <div>
                <CustomButton style={{marginTop: '15px'}} onClick={setPoint(point)}>
                        {`${point.name} - ${point.code}`}
                </CustomButton>
            </div>
        )
    })
}