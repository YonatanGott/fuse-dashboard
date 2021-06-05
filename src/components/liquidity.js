import { Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    paper: {
        backgroundColor: "#b7feb8",
        padding: "1.5rem",
        marginTop: "1rem"
    },
    button: {
        marginRight: "0.3rem"
    }
}));


const Liquidity = () => {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="h4" gutterBottom>
                Add or Remove Liquidity
            </Typography>
            <Button variant="outlined" className={classes.button} size="large" >
                fUSD
            </Button>
            <Button variant="outlined" className={classes.button} size="large" >
                USDC
            </Button>
        </Paper>
    );
}

export default Liquidity;