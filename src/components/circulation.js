import { Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { getFUSDSupply } from "../utils/fusdSupply";
import { getUsdcSwap } from "../utils/pegSwap";


const useStyles = makeStyles(() => ({
    paper: {
        backgroundColor: "#b7feb8",
        padding: "1.5rem"
    }
}));

const Circulation = () => {
    const classes = useStyles();
    const [fuse, setFuse] = useState('');

    const getCirculation = async () => {
        let fuse = await getFUSDSupply();
        let usdc = await getUsdcSwap();
        fuse = fuse.toFixed(3);
        usdc = usdc.toFixed(3)
        let circulation = fuse - usdc;
        setFuse(circulation.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    }
    useEffect(() => {
        getCirculation()
    }, [])

    return (
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="h4" gutterBottom>
                fUSD in Circulation
            </Typography>
            <Typography variant="h6" gutterBottom>
                Supply:
            </Typography>
            <Button variant="outlined" className="btn" size="large" >
                {fuse} (fUSD)
            </Button>
        </Paper>
    );
}

export default Circulation;