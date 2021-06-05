import { Paper, Typography, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getFuseSwap, getUsdcSwap } from "../utils/pegSwap";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(() => ({
    paper: {
        backgroundColor: "#b7feb8",
        padding: "1.5rem"
    },
}));

const Pegswap = () => {
    const classes = useStyles();
    const [fuseSwap, setFuseSwap] = useState('');
    const [usdcSwap, setUsdcSwap] = useState('');

    const getPegSwap = async () => {
        let fuseSwap = await getFuseSwap();
        let usdcSwap = await getUsdcSwap();
        setFuseSwap(fuseSwap.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        setUsdcSwap(usdcSwap.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    }

    useEffect(() => {
        getPegSwap()
    }, [])


    return (
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="h4" >
                Pegswap Contract
            </Typography>
            <Typography variant="h4" gutterBottom>
                USDC - fUSD
            </Typography>
            <Typography variant="h6" gutterBottom>
                fUSD that can be swaped via the pegswap contract:
            </Typography>
            <Button variant="outlined" className="btn" size="large" >
                {fuseSwap} (fUSD)
            </Button>
            <Typography variant="h6" gutterBottom>
                USDC in the pegswap pool:
            </Typography>
            <Button variant="outlined" className="btn" size="large" >
                {usdcSwap} (USDC)
            </Button>
        </Paper>
    );
}

export default Pegswap;