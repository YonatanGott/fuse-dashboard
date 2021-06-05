import { Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { getCurrentAccount } from '../utils/account'


const useStyles = makeStyles(() => ({
    paper: {
        backgroundColor: "#b7feb8",
        padding: "1.5rem"
    },
}));

const Account = () => {
    const classes = useStyles();
    const [balance, setBalance] = useState('')

    const getAccount = async () => {
        let account = await getCurrentAccount();
        let fusd = account / 1000000000000000000;
        setBalance(fusd.toFixed(5));
    }


    useEffect(() => {
        getAccount();
    }, []);


    return (
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="h4" gutterBottom>
                Current fUSD in your account
            </Typography>
            <Button variant="outlined" className="btn" size="large" >
                {balance}
            </Button>
        </Paper>
    );
}

export default Account;