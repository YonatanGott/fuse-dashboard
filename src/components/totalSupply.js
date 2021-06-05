import { Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { getFUSDSupply } from "../utils/fusdSupply";

const useStyles = makeStyles(() => ({
    paper: {
        backgroundColor: "#b7feb8",
        padding: "1.5rem"
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
                Fuse Dollar
            </Typography>
            <Typography variant="h6" gutterBottom>
                Total supply:
            </Typography>
            <Button variant="outlined" className="btn" size="large" >
                {supply} (fUSD)
            </Button>
        </Paper>
    );
}

export default TotalSupply;