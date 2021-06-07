import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { getCurrentAccount } from '../utils/account'


const useStyles = makeStyles(() => ({
    paper: {
        backgroundColor: "#b7feb8",
        padding: "1.5rem",
        marginTop: "1rem"
    },
    balance: {
        fontFamily: "Orbitron",
        fontWeight: "700",
    }
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
                Current FUSE in your Account
            </Typography>
            {balance &&
                <Typography variant="h5" gutterBottom className={classes.balance}>
                    {balance} FUSE
            </Typography>}
        </Paper>
    );
}

export default Account;