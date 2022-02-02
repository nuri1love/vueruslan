import React from "react";
import { Typography } from "@mui/material";
import { useStyles } from "./footerStyles";

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.footer} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h6"  >
                &nbsp;
                <a href="http/vk.com" rel="noreferrer" target="_blank" className={classes.navLink}>
                    Nu-Ri
                </a>
            </Typography>
        </footer>
    );
};

export default Footer;
