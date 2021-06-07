import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    paper: {
        backgroundColor: "#b7feb8",
        padding: "1.5rem",
    },
    swap: {
        fontFamily: "Orbitron",
        fontWeight: "700",
    },
}));


const Liquidity = ({ usdcSwap, fuseSwap }) => {
    const classes = useStyles();


    return (
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="h4" gutterBottom>
                Liquidity
            </Typography>
            <Typography variant="h5" className={classes.swap} gutterBottom>
                {usdcSwap} USDC - {fuseSwap} fUSD
            </Typography>
            <Typography variant="h6" gutterBottom>
                Pegswap contract liquidity shows how much USDC & fUSD are in the pool and can be swapped
            </Typography>
        </Paper>
    );
}

export default Liquidity;
