import { Grid } from "@material-ui/core"
import Account from "./account"
import Circulation from "./circulation"
import Pegswap from "./pegswap"
import TotalSupply from "./totalSupply"
import { makeStyles } from "@material-ui/core/styles";
import Header from "./header"
import Liquidity from "./liquidity"
import { useEffect, useState } from "react"
import { getFuseSwap, getUsdcSwap } from "../utils/pegSwap";

const useStyles = makeStyles(() => ({
    grid: {
        backgroundColor: "#031928",
        marginTop: '1rem'
    },
}));

const Layout = () => {
    const classes = useStyles();
    const [fuseSwap, setFuseSwap] = useState('');
    const [usdcSwap, setUsdcSwap] = useState('');
    const [data, setData] = useState('');

    const getPegSwap = async () => {
        let fuseSwap = await getFuseSwap();
        let usdcSwap = await getUsdcSwap();
        const data =
            [
                {
                    "id": "fUSD",
                    "label": "fUSD",
                    "value": fuseSwap.toFixed(0),
                },
                {
                    "id": "USDC",
                    "label": "USDC",
                    "value": usdcSwap.toFixed(0),
                },
            ]
        setData(data)
        setFuseSwap(fuseSwap.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        setUsdcSwap(usdcSwap.toFixed(3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
    }

    useEffect(() => {
        getPegSwap()
    }, [])

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
            spacing={4}
            className={classes.grid}
        >
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={6}>
                <TotalSupply />
            </Grid>
            <Grid item xs={6}>
                <Circulation />
            </Grid>
            <Grid item xs={6}>
                <Pegswap data={data} />
            </Grid>
            <Grid xs={6} item>
                <Liquidity fuseSwap={fuseSwap} usdcSwap={usdcSwap} />
                <Account />
            </Grid>
        </Grid>
    );
}

export default Layout;