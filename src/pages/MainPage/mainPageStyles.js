import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    slide: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    navLink: {
        color: "#008000",
        textDecoration: 'none !important',
        "&:hover": {
            color: "#008000",
            textDecoration: 'none',
        },
        "&:visited": {
            color: "#008000",
        },
    },
}));
