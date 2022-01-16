
import {Grid} from "@mui/material";
import * as React from "react";

const ConfessionTableTitle = (props) => {
    //title: Send a Confession

    return (
        <Grid item xs={12}>
            <div className="confession-box-title">
                {props.icon}
                <p className="title">{props.title}</p>
            </div>
        </Grid>
    );
}

export default ConfessionTableTitle;