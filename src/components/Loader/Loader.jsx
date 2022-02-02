import React from "react";
import {CircularProgress} from '@mui/material'

const Loader = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                minHeight: "300px",
                alignItems: "center",
            }}
        >
            <CircularProgress color="success" />
        </div>
    );
};

export default Loader;
