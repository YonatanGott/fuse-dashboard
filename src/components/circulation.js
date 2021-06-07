import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { getFUSDSupply } from "../utils/fusdSupply";
import { getFuseSwap } from "../utils/pegSwap";

const useStyles = makeStyles(() => ({
    paper: {
        backgroundColor: "#b7feb8",
        padding: "1.5rem"
    },
    fuse: {
        fontFamily: "Orbitron",
        fontWeight: "700",
    }
}));

const Circulation = () => {
    const classes = useStyles();
    const [fuse, setFuse] = useState('');

    const getCirculation = async () => {
        let fuse = await getFUSDSupply();
        let fuseSwap = await getFuseSwap();
        fuse = fuse.toFixed(3);
        fuseSwap = fuseSwap.toFixed(3)
        let circulation = fuse - fuseSwap;
        setFuse(circulation.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    }

    useEffect(() => {
        getCirculation()
    }, [])

    return (
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="h4" gutterBottom>
                Fuse Dollar in Circulation
            </Typography>
            <Typography variant="h5" gutterBottom className={classes.fuse}>
                {fuse} fUSD
            </Typography>
        </Paper>
    );
}

export default Circulation;