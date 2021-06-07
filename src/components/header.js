import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    paper: {
        backgroundColor: "#031928",
        padding: "1rem",
        marginTop: "0.5rem",
        width: "100%"
    },
    title: {
        color: "#b7feb8",
        fontFamily: "Staatliches"
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <Paper elevation={0} className={classes.paper}>
            <Typography className={classes.title} variant="h1" >
                Fuse Dollar
            </Typography>
        </Paper>
    );
}

export default Header;