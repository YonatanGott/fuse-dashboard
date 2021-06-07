import { ResponsivePie } from '@nivo/pie'



const PieChart = ({ data }) => {


    return (
        data &&
        <ResponsivePie
            data={data}
            colors={"#031928"}
            theme={{
                fontSize: "0.9rem",
            }}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsTextColor="#031928"
            arcLabelsTextColor="#b7feb8"
            arcLinkLabelsThickness={4}
            arcLabelsSkipAngle={10}
            arcLinkLabelsColor={{ from: 'color' }}
        />
    );
}

export default PieChart;