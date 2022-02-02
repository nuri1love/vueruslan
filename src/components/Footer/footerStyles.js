import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#138808',
        width: '100%',
        color: "#fff",
        height: '32px',
        marginTop: 'auto',
    },
    navLink: {
        color: "#000000",
        textDecoration: 'none',
        "&:hover": {
            color: "#000000",
            textDecoration: 'none',
        },
        "&:visited": {
            color: "#000000",
        },
    },
}));