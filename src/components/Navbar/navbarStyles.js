import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    navLink: {
        color: "#fff !important",
        paddingRight: '20px',
        textDecoration: 'none !important',
        "&:hover": {
            color: "#fff",
            textDecoration: 'none',
        },
        "&:visited": {
            color: "green",
            textDecoration: 'none',
        },
    },
    search: {
        color: 'green !important'
    },
    textField: {
    },
}));
