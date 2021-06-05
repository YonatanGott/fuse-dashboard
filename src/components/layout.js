import { Grid } from "@material-ui/core"
import Account from "./account"
import Circulation from "./circulation"
import Pegswap from "./pegswap"
import TotalSupply from "./totalSupply"
import { makeStyles } from "@material-ui/core/styles";
import Liquidity from "./liquidity"


const useStyles = makeStyles(() => ({
    grid: {
        backgroundColor: "#031928",
        marginTop: '2rem'
    },
}));


const Layout = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={4}
            className={classes.grid}
        >

            <Grid item xs={6}>
                <TotalSupply />
            </Grid>
            <Grid item xs={6}>
                <Circulation />
            </Grid>
            <Grid item xs={6}>
                <Pegswap />
            </Grid>
            <Grid xs={6} item>
                <Account />
                <Liquidity />
            </Grid>
        </Grid>
    );
}

export default Layout;