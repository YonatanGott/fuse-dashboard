import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { getFUSDSupply } from "../utils/fusdSupply";

const useStyles = makeStyles(() => ({
    paper: {
        backgroundColor: "#b7feb8",
        padding: "1.5rem"
    },
    supply: {
        fontFamily: "Orbitron",
        fontWeight: "700",
    }
}));

const TotalSupply = () => {
    const classes = useStyles();
    const [supply, setSupply] = useState('');

    const getSupply = async () => {
        let fsud = await getFUSDSupply();
        setSupply(fsud.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    }
    useEffect(() => {
        getSupply()
    }, [])

    return (
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="h4" gutterBottom>
                Fuse Dollar Total Supply
            </Typography>
            <Typography variant="h5" gutterBottom className={classes.supply}>
                {supply} fUSD
            </Typography>
        </Paper>
    );
}

export default TotalSupply;