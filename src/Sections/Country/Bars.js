import React, {useState, useEffect} from "react";
import ReactApexChart from "react-apexcharts";

const Bars = ({CountryData}) =>{
    
    const [graphData, setGraphData] = useState({
        series: [{
              data: [1, 2, 3, 4, 5]
            }],
        options: {
          chart: {
            type: 'bar',
            height: 350
          },
          plotOptions: {
            bar: {
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: ["China", "italia", "Argentina", "Ireland", "Saint Barthelemy"],
          }
        },
    });
    
    
    useEffect(()=>{
        let graphics = {...graphData};
        
        
        setGraphData(graphics);
        
        }, [CountryData]);
      
    return (
        <div>
            <ReactApexChart graphData={graphData} CountryData={CountryData}/>
        </div>
    )
}

export default Bars;
