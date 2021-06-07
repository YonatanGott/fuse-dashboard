import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PieChart from "./pieChart";

const useStyles = makeStyles(() => ({
    paper: {
        backgroundColor: "#b7feb8",
        padding: "1rem"
    },
    swap: {
        fontFamily: "Orbitron",
        fontWeight: "700",
    },
    chart: {
        backgroundColor: "#b7feb8",
        height: "300px"
    }
}));

const Pegswap = ({ data }) => {
    const classes = useStyles();

    return (
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="h4" >
                Pegswap Contract
            </Typography>
            <Paper elevation={0} className={classes.chart}>
                <PieChart data={data} />
            </Paper>
        </Paper>
    );
}

export default Pegswap;
